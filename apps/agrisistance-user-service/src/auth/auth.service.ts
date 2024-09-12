import { Injectable } from '@nestjs/common';
import { PrismaUserService } from '../.prisma/prisma-user/prisma-user.service'
import { PrismaLandService} from '../.prisma/prisma-land/prisma-land.service'
import { PrismaNetworkService} from '../.prisma/prisma-network/prisma-network.service'
import { AuthDto, LoginDto, ResetPasswordDto, VerifyOtpDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import * as twilio from 'twilio';
import { EmailService } from '../.email/email.service';
import { ConfigService } from '@nestjs/config';
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class AuthService {
    
    private client = twilio(this.config.get<string>('TWILIO_SID'), this.config.get<string>('TWILIO_API_KEY'));

    constructor(
        private config: ConfigService,
        private prismaUser: PrismaUserService, 
        private prismaLand: PrismaLandService,
        private prismaNetwork: PrismaNetworkService,
        private emailService: EmailService,
        private jwtService: JwtService,
    ) {}

    async register(authDto: AuthDto) {
        // Check if the Email is already taken;
        const user = await this.prismaUser.user.findUnique({
            where: {
                email: authDto.email
            }
        });

        if(user) {
            return { error: 'E-mail already exists' };
        }

        const hashedPassword = await argon.hash(authDto.password);

        const newUser = await this.prismaUser.user.create({
            data:{
                first_name: authDto.firstName,
                last_name: authDto.lastName,
                email: authDto.email,
                password: hashedPassword,
                country: authDto.country,
                phone_number: authDto.phoneNumber,
            }
        })

        await this.prismaLand.user.create({
            data:{
                user_id: newUser.user_id,
            }
        })

        await this.prismaNetwork.user.create({
            data:{
                user_id: newUser.user_id,
                first_name: authDto.firstName,
                last_name: authDto.lastName,
                country: authDto.country,
                phone_number: authDto.phoneNumber,
            }
        })



        // TODO: Register user in the network database 

        const token = this.jwtService.sign({ user_id: newUser.user_id }, { expiresIn: '10m' });
        await this.emailService.sendEmail(newUser.email, token, 'confirmation');

        return { message: 'User created successfully please verify your account via the link sent by Email' };
    }

    async verify(token: string) {
        const { user_id } = await this.jwtService.verifyAsync(token);
        await this.prismaUser.user.update({
            where: {
                user_id,
            },
            data: {
                is_verified: true,
            },
        });

        const realToken = this.jwtService.sign({ user_id }, { expiresIn: '10d' });
        return { message: 'Account verified successfully', token: realToken };
    }

    async login(loginDto: LoginDto) {
        // Check if the user exists
        const user = await this.prismaUser.user.findUnique({
            where: {
                email: loginDto.email
            }
        });

        if(!user) {
            return { error: 'User not found' };
        }

        // Check if the password is correct
        if (!await argon.verify(user.password, loginDto.password)) {
            return { error: 'Invalid password' };
        }

        // Check if the Email is verified
        if (!user.is_verified) {
            const token = this.jwtService.sign({ user_id: user.user_id }, { expiresIn: '10m' });
            await this.emailService.sendEmail(user.email, token, 'confirmation');
            return { error: 'Please verify your account' };
        }

        // Check if 2FA enabled
        if (user.is_2fa_enabled) {
            const otp = Math.floor(100000 + Math.random() * 900000);
            await this.prismaUser.user.update({
                where: {
                    user_id: user.user_id,
                },
                data: {
                    secret_2fa: otp.toString(),
                },
            });

            // Send the SMS Text : This part is commented as it consume credits from my twilio account (it works fine)

            // await this.client.messages.create({
            //     body: `Dear User,

            //         Your A2SV-Agrisistance verification code is ${otp}. Please enter this code in the app/website to verify your account.

            //         Thank you.`,

            //     from: this.config.get<string>('TWILIO_PHONE_NUMBER'),
            
            //     to: user.phone_number,
            // }).then(message => console.log(message.sid));

            // Send it via email instead
            await this.emailService.sendEmail(user.email, otp.toString(), 'otp');
            return { message: 'Please verify your OTP' };
        }

        // Generate a JWT token
        const token = this.jwtService.sign({ user_id: user.user_id }, { expiresIn: '10d' });
        return { message: 'Loged successfully', token };
    }

    async verifyOtp(verifyOtpDto: VerifyOtpDto) {
        // Check if the user requested an OTP
        const user = await this.prismaUser.user.findUnique({
            where: {
                user_id: verifyOtpDto.user_id
            },
        });

        if(!user || !user.secret_2fa) {
            return { error: 'User not found' };
        }

        // Verify the OTP
        if (verifyOtpDto.otp !== user.secret_2fa) {
            return { error: 'Invalid OTP' };
        }

        // Generate a JWT token
        const token = this.jwtService.sign({ user_id: verifyOtpDto.user_id }, { expiresIn: '10d' });
        return { message: 'OTP verified successfully', token };
    }

    async forgotPassword(email: string) {
        // Check if the user exists
        const user = await this.prismaUser.user.findUnique({
            where: {
                email
            }
        });

        if(!user) {
            return { error: 'User not found' };
        }

        const token = this.jwtService.sign({ user_id: user.user_id }, { expiresIn: '10m' });
        await this.emailService.sendEmail(email, token, 'resetPassword');

        return { message: 'Password reset link sent to your email' };
    }

    async resetPassword(resetPasswordDto: ResetPasswordDto) {
        const { user_id } = await this.jwtService.verifyAsync(resetPasswordDto.token);
        const hashedPassword = await argon.hash(resetPasswordDto.newPassword);

        await this.prismaUser.user.update({
            where: {
                user_id,
            },
            data: {
                password: hashedPassword,
            },
        });

        return { message: 'Password reset successfully' };
    }
}
