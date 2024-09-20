import { Body, Controller, Delete, Get, Post, Put, Param, HttpCode, HttpStatus, UseGuards, Redirect } from "@nestjs/common";
import { ProfileService } from './profile.service';
import { JwtGuard } from "../../.guard";
import { JwtDecorator } from "../../.decorator";
import { ProfileDto, UserEmailReqDto, UserPasswordReqDto, UserSubscriptionReqDto } from "./dto";


@Controller('profile')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    
    @UseGuards(JwtGuard)
    @Get('get-profile')
    @HttpCode(HttpStatus.OK)
    async getProfile(
      @JwtDecorator('user_id') user_id: string,
    ) {
      return this.profileService.getProfile(user_id);
    }

    
    @UseGuards(JwtGuard)
    @Put('edit-profile')
    @HttpCode(HttpStatus.OK)
    async updateProfile(
      @JwtDecorator('user_id') user_id: string,
      @Body() profileDto: ProfileDto,
    ) {
      return this.profileService.updateProfile(user_id, profileDto);
    }

    @UseGuards(JwtGuard)
    @Delete('delete-profile')
    @HttpCode(HttpStatus.OK)
    async deleteProfile(
      @JwtDecorator('user_id') user_id: string,    
    ) {
      return this.profileService.deleteProfile(user_id);
    }

    
    @UseGuards(JwtGuard)
    @Put('update-email')
    @HttpCode(HttpStatus.ACCEPTED)
    async updateEmail(
      @JwtDecorator('user_id') user_id: string,
      @Body() userEmailReqDto: UserEmailReqDto,
    ) {
      return this.profileService.updateEmail(user_id, userEmailReqDto);
    }

    @Put('update-email/verify/:token')
    @HttpCode(HttpStatus.OK)
    // @Redirect('https://agrisistatnce.netlify.app/dashboard/profile/email-updated-successfully')
    async verifyUpdateEmail(
      @Param('token') token :string,    
    ) {
      return this.profileService.veirfyUpdateEmail(token);
    }

    
    @UseGuards(JwtGuard)
    @Put('update-password')
    @HttpCode(HttpStatus.OK)
    async updatePassword(
      @JwtDecorator('user_id') user_id: string,
      @Body() userPasswordReqDto: UserPasswordReqDto,
    ) {
      return this.profileService.updatePassword(user_id, userPasswordReqDto);
    }

    @UseGuards(JwtGuard)
    @Put('update-subscription')
    @HttpCode(HttpStatus.OK)
    async updateSubcription(
      @JwtDecorator('user_id') user_id: string,
      @Body() userSubscriptionReqDto: UserSubscriptionReqDto,
    ) {
      return this.profileService.updateSubscription(user_id, userSubscriptionReqDto);
    }

}
