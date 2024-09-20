import { Injectable, HttpException, HttpStatus, NotFoundException, BadRequestException, InternalServerErrorException, Inject } from '@nestjs/common';
import { PrismaUserService } from '../.prisma/prisma-user/prisma-user.service';
import { PrismaLandService } from '../.prisma/prisma-land/prisma-land.service';
import { PrismaNetworkService } from '../.prisma/prisma-network/prisma-network.service';
import { AuthDto, LoginDto, ResetPasswordDto, VerifyOtpDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import * as twilio from 'twilio';
import { EmailService } from '../.email/email.service';
import { ConfigService } from '@nestjs/config';
import { Cache } from 'cache-manager';

@Injectable()
export class AuthService {
    private client = twilio(this.config.get<string>('TWILIO_SID'), this.config.get<string>('TWILIO_API_KEY'));

    constructor(
        private readonly config: ConfigService,
        private readonly prismaUser: PrismaUserService,
        private readonly prismaLand: PrismaLandService,
        private readonly prismaNetwork: PrismaNetworkService,
        private readonly emailService: EmailService,
        private readonly jwtService: JwtService,

        @Inject('CACHE_MANAGER') private cacheManager: Cache
    ) {}

    async register(authDto: AuthDto) {
        try {
            const user = await this.prismaUser.user.findUnique({
                where: { email: authDto.email },
            });

            if (user) {
                return {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    path: '/register',
                    message: 'E-mail already in use.',
                };;
            }

            const hashedPassword = await argon.hash(authDto.password);

            const newUser = await this.prismaUser.user.create({
                data: {
                    first_name: authDto.firstName,
                    last_name: authDto.lastName,
                    email: authDto.email,
                    password: hashedPassword,
                    country: authDto.country,
                    phone_number: authDto.phoneNumber,
                },
            });

            await this.prismaLand.user.create({
                data: { user_id: newUser.user_id },
            });

            await this.prismaNetwork.user.create({
                data: {
                    user_id: newUser.user_id,
                    first_name: authDto.firstName,
                    last_name: authDto.lastName,
                    country: authDto.country,
                    phone_number: authDto.phoneNumber,
                },
            });

            const token = this.jwtService.sign({ user_id: newUser.user_id }, { expiresIn: '10m' });
            await this.emailService.sendEmail(newUser.email, token, 'confirmation');

            return { message: 'User created successfully. Please verify your account via the link sent by Email' };
        } catch (error) {
            console.error('Registration error:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/register',
                message: 'Failed to register user.',
            };
        }
    }

    async verify(token: string) {
        try {
            const { user_id } = await this.jwtService.verifyAsync(token);
            await this.prismaUser.user.update({
                where: { user_id },
                data: { is_verified: true },
            });

            const realToken = this.jwtService.sign({ user_id }, { expiresIn: '10d' });
            return { message: 'Account verified successfully', token: realToken };
        } catch (error) {
            console.error('Verification error:', error);
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                timestamp: new Date().toISOString(),
                path: '/verify',
                message: 'Invalid verification token.',
            };
        }
    }

    async login(loginDto: LoginDto) {
        try {
            const user = await this.prismaUser.user.findUnique({
                where: { email: loginDto.email },
            });

            if (!user) {
                return {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    path: '/login',
                    message: 'User not found.',
                };
            }

            if (!await argon.verify(user.password, loginDto.password)) {
                return {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    path: '/login',
                    message: 'Password incorrect.',
                };
            }

            if (!user.is_verified) {
                const token = this.jwtService.sign({ user_id: user.user_id }, { expiresIn: '10m' });
                await this.emailService.sendEmail(user.email, token, 'confirmation');
                return { message: 'Please verify your account via the link sent by Email' };
            }

            if (user.is_2fa_enabled) {
                const otp = Math.floor(100000 + Math.random() * 900000);
                
                // We use Either database for verification
                // await this.prismaUser.user.update({
                //     where: { user_id: user.user_id },
                //     data: { secret_2fa: otp.toString() },
                // });


                // Or we use Redis
                await this.cacheManager.set(user.user_id, otp)


                // Send the SMS Text : This part is commented as it consume credits from my twilio account (it works fine)

                // await this.client.messages.create({
                //     body: `Dear User,
                
                //         Your A2SV-Agrisistance verification code is ${otp}. Please enter this code in the app/website to verify your account.
                
                //         Thank you.`,
                
                //     from: this.config.get<string>('TWILIO_PHONE_NUMBER'),
                
                //     to: user.phone_number,
                // }).then(message => console.log(message.sid));
                
                // Send it via email instead

                await this.emailService.sendEmail(user.email, otp.toString(), 'OTPverify');
                const token = this.jwtService.sign({ user_id: user.user_id }, { expiresIn: '10m' });
                return { message: 'Please verify your OTP. Use this token to send your OTP verification request', token };
            }

            await this.prismaUser.user.update({
                where: { user_id: user.user_id },
                data: { deletion_requested_at: null, last_login: new Date() },
            });

            const token = this.jwtService.sign({ user_id: user.user_id }, { expiresIn: '10d' });
            return { message: 'Logged in successfully', token };
        } catch (error) {
            console.error('Login error:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/login',
                message: 'Failed to login.',
            };
        }
    }

    async verifyOtp(verifyOtpDto: VerifyOtpDto) {
        try {
            // We use Either database for verification

            // const user = await this.prismaUser.user.findUnique({
            //     where: { user_id: verifyOtpDto.user_id },
            // });

            // if (!user || !user.secret_2fa) {
            //     throw new NotFoundException('User not found');
            // }


             // Or caching using Redis
            const secret_2fa = await this.cacheManager.get(verifyOtpDto.user_id);
            
            // if (verifyOtpDto.otp !== user.secret_2fa) {
            if (verifyOtpDto.otp !== secret_2fa) {
                return {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    path: '/verify-otp',
                    message: 'OTP Incorrect.',
                };
            }

            await this.prismaUser.user.update({
                where: { user_id: verifyOtpDto.user_id },
                data: { secret_2fa: null, deletion_requested_at: null, last_login: new Date() },
            });

            const token = this.jwtService.sign({ user_id: verifyOtpDto.user_id }, { expiresIn: '10d' });
            return { message: 'OTP verified successfully. Here is your access token', token };
        } catch (error) {
            console.error('OTP verification error:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/verify-otp',
                message: 'Failed to verify OTP.',
            };
        }
    }

    async forgotPassword(email: string) {
        try {
            const user = await this.prismaUser.user.findUnique({
                where: { email },
            });

            if (!user) {
                return {
                    statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                    timestamp: new Date().toISOString(),
                    path: '/forgot-password',
                    message: 'User Not found',
                };
            }

            const token = this.jwtService.sign({ user_id: user.user_id }, { expiresIn: '10m' });
            await this.emailService.sendEmail(email, token, 'resetPassword');

            return { message: 'Password reset link sent to your email' };
        } catch (error) {
            console.error('Forgot password error:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/forgot-password',
                message: 'Failed to send password reset link.',
            };
        }
    }

    async resetPassword(resetPasswordDto: ResetPasswordDto) {
        try {
            const { user_id } = await this.jwtService.verifyAsync(resetPasswordDto.token);
            const hashedPassword = await argon.hash(resetPasswordDto.newPassword);

            await this.prismaUser.user.update({
                where: { user_id },
                data: { password: hashedPassword },
            });

            return { message: 'Password reset successfully' };
        } catch (error) {
            console.error('Reset password error:', error);
            return {
                statusCode: HttpStatus.BAD_REQUEST,
                timestamp: new Date().toISOString(),
                path: '/reset-password',
                message: 'Invalid reset token or failed to reset password.',
            };
        }
    }
}
