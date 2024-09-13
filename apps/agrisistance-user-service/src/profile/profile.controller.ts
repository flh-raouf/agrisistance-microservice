import { Controller } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { EventPattern } from '@nestjs/microservices';
import { ProfileDto, UserEmailReqDto, UserPasswordReqDto, UserSubscriptionReqDto } from './dto';
import { UserEmailVerifyReqDto } from './dto/user-email-verify-req.dto';

@Controller()
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @EventPattern('getProfile')
    async getProfile(user_id: string) {
        return this.profileService.getProfile(user_id);
    }

    @EventPattern('UpdateProfile')
    async updateProfile(profileDto: ProfileDto) {
        return this.profileService.updateProfile(profileDto);
    }

    @EventPattern('DeleteProfile')
    async deleteProfile(user_id: string) {
        return this.profileService.deleteProfile(user_id);
    }

    @EventPattern('UpdateEmail')
    async updateEmail(userEmailReqDto: UserEmailReqDto) {
        return this.profileService.updateEmail(userEmailReqDto);
    }


    @EventPattern('VerifyUpdateEmail')
    async verifyUpdateEmail(userEmailVerifyReq: UserEmailVerifyReqDto) {
        return this.profileService.verifyUpdateEmail(userEmailVerifyReq);
    }

    @EventPattern('UpdatePassword')
    async updatePassword(userPasswordReqDto: UserPasswordReqDto) {
        return this.profileService.updatePassword(userPasswordReqDto);
    }

    @EventPattern('UpdateSubcription')
    async updateSubcription(userSubscriptionReqDto: UserSubscriptionReqDto) {
        return this.profileService.updateSubscription(userSubscriptionReqDto);
    }
}
