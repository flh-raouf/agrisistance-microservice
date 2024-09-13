import { Injectable, InternalServerErrorException, NotFoundException, BadRequestException } from '@nestjs/common';
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
    private readonly stripe: Stripe;

    constructor(
        private readonly config: ConfigService,
        private readonly prisma: PrismaUserService,
        private readonly emailService: EmailService,
        private readonly jwtService: JwtService,
        private readonly cloudinaryService: CloudinaryService,
    ) {
        this.stripe = new Stripe(this.config.get<string>('STRIPE_SECRET_KEY'));
        cloudinary.v2.config({
            cloud_name: this.config.get("CLOUDINARY_CLOUD_NAME"),
            api_key: this.config.get("CLOUDINARY_API_KEY"),
            api_secret: this.config.get("CLOUDINARY_API_SECRET"),
        });
    }

    private async handleCloudinaryImage(profilePicture: string) {
        try {
            if (profilePicture) {
                const publicId = this.cloudinaryService.extractPublicId(profilePicture);
                if (publicId) {
                    await this.cloudinaryService.deleteImageFromCloudinary(publicId, 'Users-Profile-Pictures');
                }
                const uploadResult = await cloudinary.v2.uploader.upload(profilePicture, {
                    folder: 'Agrisistance/Users-Profile-Pictures',
                });
                return uploadResult.secure_url;
            }
            return profilePicture;
        } catch (error) {
            console.error('Error handling Cloudinary image:', error);
            throw new InternalServerErrorException('Failed to process the profile picture.');
        }
    }

    async getProfile(user_id: string) {
        try {
            const userProfile = await this.prisma.user.findUnique({
                where: { user_id },
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
            if (!userProfile) {
                throw new NotFoundException('User profile not found.');
            }
            return userProfile;
        } catch (error) {
            console.error('Error fetching profile:', error);
            throw new InternalServerErrorException('Could not fetch profile data.');
        }
    }

    async updateProfile(profileDto: ProfileDto) {
        try {
            if (profileDto.profile_picture) {
                profileDto.profile_picture = await this.handleCloudinaryImage(profileDto.profile_picture);
            }

            await this.prisma.user.update({
                where: { user_id: profileDto.user_id },
                data: {
                    first_name: profileDto.first_name,
                    last_name: profileDto.last_name,
                    country: profileDto.country,
                    phone_number: profileDto.phone_number,
                    profile_picture: profileDto.profile_picture,
                },
            });
            return { message: 'Profile updated successfully' };
        } catch (error) {
            console.error('Error updating profile:', error);
            throw new InternalServerErrorException('Failed to update profile.');
        }
    }

    async deleteProfile(user_id: string) {
        try {
            const [_, email] = await Promise.all([
                this.prisma.user.update({
                    where: { user_id },
                    data: { deletion_requested_at: new Date(Date.now()) },
                }),
                this.prisma.user.findUnique({
                    where: { user_id },
                    select: { email: true },
                }),
            ]);

            await this.emailService.sendEmail(email.email, '', 'deletion');
            return { message: 'Account deletion request received successfully. Please check your email.' };
        } catch (error) {
            console.error('Error deleting profile:', error);
            throw new InternalServerErrorException('Failed to process account deletion.');
        }
    }

    async updateEmail(userEmailReqDto: UserEmailReqDto) {
        try {
            const emailInUse = await this.prisma.user.findUnique({
                where: { email: userEmailReqDto.email },
            });

            if (emailInUse) {
                throw new BadRequestException('Email already in use');
            }

            const payload = { user_id: userEmailReqDto.user_id, email: userEmailReqDto.email };
            const token = await this.jwtService.signAsync(payload);
            await this.emailService.sendEmail(userEmailReqDto.email, token, 'updateVerification');

            return { message: 'Verification email sent' };
        } catch (error) {
            console.error('Error updating email:', error);
            throw new InternalServerErrorException('Failed to update email.');
        }
    }

    async verifyUpdateEmail(userEmailVerifyReq: UserEmailVerifyReqDto) {
        try {
            await this.prisma.user.update({
                where: { user_id: userEmailVerifyReq.user_id },
                data: { email: userEmailVerifyReq.email },
            });
            return { message: 'Email updated successfully' };
        } catch (error) {
            console.error('Error verifying email update:', error);
            throw new InternalServerErrorException('Failed to verify email update.');
        }
    }

    async updatePassword(userPasswordReqDto: UserPasswordReqDto) {
        try {
            const user = await this.prisma.user.findUnique({
                where: { user_id: userPasswordReqDto.user_id },
                select: { password: true },
            });

            if (!user || !(await argon.verify(user.password, userPasswordReqDto.oldPassword))) {
                throw new BadRequestException('Invalid password');
            }

            const hashedPassword = await argon.hash(userPasswordReqDto.newPassword);
            await this.prisma.user.update({
                where: { user_id: userPasswordReqDto.user_id },
                data: { password: hashedPassword },
            });

            return { message: 'Password updated successfully' };
        } catch (error) {
            console.error('Error updating password:', error);
            throw new InternalServerErrorException('Failed to update password.');
        }
    }

    async updateSubscription(userSubscriptionReqDto: UserSubscriptionReqDto) {
        try {
            const user = await this.prisma.user.findUnique({
                where: { user_id: userSubscriptionReqDto.user_id },
                select: { subscription_type: true },
            });

            if (user.subscription_type === userSubscriptionReqDto.subscription) {
                throw new BadRequestException('Already subscribed to this plan');
            }

            const prices = { Basic: 0, Premium: 1000 };
            const amount = prices[userSubscriptionReqDto.subscription];

            // Uncomment and complete Stripe payment intent logic as needed
            /*
            const paymentIntent = await this.stripe.paymentIntents.create({
                amount,
                currency: 'usd',
                payment_method: payment_method_id,
                automatic_payment_methods: { enabled: true },
                return_url: 'https://example.com/return',
                confirm: true,
            });
            */

            await this.prisma.user.update({
                where: { user_id: userSubscriptionReqDto.user_id },
                data: { subscription_type: userSubscriptionReqDto.subscription },
                 // payment_intent_id: paymentIntent.id,
            });

            return { message: 'Subscription updated successfully' };
        } catch (error) {
            console.error('Error updating subscription:', error);
            throw new InternalServerErrorException('Failed to update subscription.'/*, paymentIntent*/);
        }
    }
}
