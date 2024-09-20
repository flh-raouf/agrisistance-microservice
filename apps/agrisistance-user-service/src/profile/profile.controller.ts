import { Controller, Post, Get, Put, Delete, Body, Query } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileDto, UserEmailReqDto, UserEmailVerifyReqDto, UserPasswordReqDto, UserSubscriptionReqDto } from './dto';

@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Post('get-profile')
    async getProfile(
        @Body('user_id') user_id: string,
    ) {
        return await this.profileService.getProfile(user_id);
    }

    @Put('update-profile')
    async updateProfile(
        @Body() profileDto: ProfileDto,
    ) {
        return await this.profileService.updateProfile(profileDto);
    }

    @Delete('delete-profile')
    async deleteProfile(
        @Body('user_id') user_id: string,
    ) {
        return await this.profileService.deleteProfile(user_id);
    }

    @Put('update-email')
    async updateEmail(
        @Body() userEmailReqDto: UserEmailReqDto,
    ) {
        return await this.profileService.updateEmail(userEmailReqDto);
    }

    @Post('verify-update-email')
    async verifyUpdateEmail(
        @Body() userEmailVerifyReqDto: UserEmailVerifyReqDto,
    ) {
        return await this.profileService.verifyUpdateEmail(userEmailVerifyReqDto);
    }

    @Put('update-password')
    async updatePassword(
        @Body() userPasswordReqDto: UserPasswordReqDto,
    ) {
        return await this.profileService.updatePassword(userPasswordReqDto);
    }

    @Put('update-subscription')
    async updateSubscription(
        @Body() userSubscriptionReqDto: UserSubscriptionReqDto,
    ) {
        return await this.profileService.updateSubscription(userSubscriptionReqDto);
    }
}
