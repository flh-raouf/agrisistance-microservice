import { Injectable } from '@nestjs/common';
import { PrismaUserService } from '../.prisma/prisma-user/prisma-user.service';
import { ProfileDto, UserEmailReqDto, UserEmailVerifyReqDto, UserPasswordReqDto, UserSubscriptionReqDto } from './dto';
import { EmailService } from '../.email/email.service';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import * as cloudinary from 'cloudinary';
import { CloudinaryService } from '../cloudinary/cloudinary.service';



@Injectable()
export class ProfileService {

    constructor(
        
        private readonly config: ConfigService,
        private readonly prisma: PrismaUserService,
        private readonly emailService: EmailService,
        private readonly jwtService: JwtService,
        private readonly configService: ConfigService,
        private readonly cloudinaryService: CloudinaryService,
        private readonly stripe: Stripe,

    ) {
        this.stripe = new Stripe(this.config.get<string>('STRIPE_SECRET_KEY'));
        cloudinary.v2.config({
            cloud_name: this.configService.get("CLOUDINARY_CLOUD_NAME"),
            api_key: this.configService.get("CLOUDINARY_API_KEY"),
            api_secret: this.configService.get("CLOUDINARY_API_SECRET"),
        });


    }

    async getProfile(user_id: string) {
        return await this.prisma.user.findUnique({
            where: {
                user_id,
            },
            select: {
                user_id: true,
                first_name: true,
                last_name: true,
                country: true,
                phone_number: true,
                email: true,
                profile_picture: true,
                subscription_type: true,
            },
        });
    }


    async updateProfile(profileDto: ProfileDto) {

        // if profilepicture exists in database remove the previous one and insert the new one 
        if (profileDto.profile_picture) {

            const existingProfilePicture = await this.prisma.user.findUnique({
                where: {
                    user_id: profileDto.user_id,
                },
                select: {
                    profile_picture: true,
                },
            });
    
            if (existingProfilePicture?.profile_picture) {
                const publicId = this.cloudinaryService.extractPublicId(existingProfilePicture.profile_picture);
                if (publicId) {
                  await this.cloudinaryService.deleteImageFromCloudinary(publicId, 'Users-Profile-Pictures');
                }
              }
              // Upload the new image to Cloudinary
              const uploadResult = await cloudinary.v2.uploader.upload(existingProfilePicture.profile_picture, {
                  folder: 'Agrisistance/Users-Profile-Pictures',
              });
              profileDto.profile_picture = uploadResult.secure_url;     
        }

        // Update the profile
        await this.prisma.user.update({
            where: {
                user_id: profileDto.user_id,
            },
            data: {
                first_name: profileDto.first_name,
                last_name: profileDto.last_name,
                country: profileDto.country,
                phone_number: profileDto.phone_number,
                profile_picture: profileDto.profile_picture,
            },
        });
        return { message: 'Profile updated successfully' };
        
    }


    async deleteProfile(user_id: string) {
        const [_, email] = await Promise.all([
        
            this.prisma.user.update({
                where: {
                    user_id,
                },
                data: {
                    deletion_requested_at: new Date(Date.now()),
                },
            }),

            this.prisma.user.findUnique({
                where: {
                    user_id,
                },
                select: {
                    email: true,
                },
            }),

        ]);

        await this.emailService.sendEmail(email.email , '', 'deletion'); 

        return { message: 'Account deletion request recieved successfully please check you E-mail' };
    }


    async updateEmail(userEmailReqDto: UserEmailReqDto) {
        // Check if the email is already in use
        const emailInUse = await this.prisma.user.findUnique({
            where: {
                email: userEmailReqDto.email,
            },
        });

        if (emailInUse) {
            return { message: 'Email already in use' };
        }

        // Send a verififcation Email
        const payload = { user_id: userEmailReqDto.user_id, email: userEmailReqDto.email };
        const token = await this.jwtService.signAsync( payload );
        await this.emailService.sendEmail(userEmailReqDto.email, token, 'updateVerification');

        return { message: 'Verification email sent' };
    }


    async verifyUpdateEmail(userEmailVerifyReq: UserEmailVerifyReqDto) {  
        await this.prisma.user.update({
            where: {
                user_id: userEmailVerifyReq.user_id,
            },
            data: {
                email: userEmailVerifyReq.email,
            },
        });

        return { message: 'Email updated successfully' };
    }

    async updatePassword(userPasswordReqDto: UserPasswordReqDto) {

        // Check if the old password is correct
        const user = await this.prisma.user.findUnique({
            where: {
                user_id: userPasswordReqDto.user_id,
            },
            select: {
                password: true,
            },
        });

        const isMatch = await argon.verify(user.password, userPasswordReqDto.oldPassword)
        if (!isMatch) {
            return { message: 'Invalid Password' };
        }
    
        const hashedPassword = await argon.hash(userPasswordReqDto.newPassword);
        await this.prisma.user.update({
            where: {
                user_id: userPasswordReqDto.user_id,
            },
            data: {
                password: hashedPassword,
            },
        });

        return { message: 'Password updated successfully' };
    }


    async updateSubcription(userSubscriptionReqDto: UserSubscriptionReqDto) {
        // Check if the user is already on Premium
        const user = await this.prisma.user.findUnique({
            where: {
                user_id: userSubscriptionReqDto.user_id,
            },
            select: {
                subscription_type: true,
            },
        });

        if (user.subscription_type === userSubscriptionReqDto.subscription) {
            return { message: 'Already subscribed to this plan' };
        }

        const prices = {
            Basic: 0, // $0.00
            Premium: 1000, // $10.00
        }
        const amount = prices[userSubscriptionReqDto.subscription];

        // Create a payment intent
        /*
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method: payment_method_id,
            automatic_payment_methods: {
                enabled: true,
                allow_redirects: 'never'
            },
            return_url: 'https://example.com/return',
            confirm: true,
        });

        */

        // Update the subscription
        await this.prisma.user.update({
            where: {
                user_id: userSubscriptionReqDto.user_id,
            },
            data: {
                subscription_type: userSubscriptionReqDto.subscription,
                // payment_intent_id: paymentIntent.id,
            },
        });


        return { message: 'Subscription updated successfully'/*, paymentIntent*/ };
    }
}
