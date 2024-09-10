import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ProfileDto, UserEmailReqDto, UserEmailVerifyReqDto, UserPasswordReqDto, UserSubscriptionReqDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProfileService {
    constructor(
        @Inject('USER_SERVICE') private readonly userClient: ClientProxy, 
        private jwtService: JwtService,
        private config: ConfigService,
    ) {}

    async getProfile(user_id: string) {
        return this.userClient.send('getProfile', user_id);
    }


    async updateProfile(user_id: string, profileDto: ProfileDto) {
        profileDto.user_id = user_id;
        return this.userClient.send('UpdateUser', profileDto);
    }

    async deleteProfile(user_id: string) {
        return this.userClient.send('DeleteUser', user_id);
    }

    async updateEmail(user_id: string, userEmailReqDto: UserEmailReqDto) {
        userEmailReqDto.user_id = user_id;
        return this.userClient.send('UpdateEmail', userEmailReqDto)
    }

    async veirfyUpdateEmail(token: string) {
        
        const payload = await this.jwtService.verifyAsync(token, { secret: this.config.get('JWT_SECRET')} );

        const userEmailVerifyReq: UserEmailVerifyReqDto = new UserEmailVerifyReqDto();
        userEmailVerifyReq.user_id = payload.user_id;
        userEmailVerifyReq.email = payload.email;

        return this.userClient.send('VerifyUpdateEmail', userEmailVerifyReq);
    }

    async updatePassword(user_id: string, userPasswordReqDto: UserPasswordReqDto){
        userPasswordReqDto.user_id = user_id
        return this.userClient.send('UpdatePassword', userPasswordReqDto)
    }

    async updateSubscription(user_id: string, userSubscriptionReqDto: UserSubscriptionReqDto){
        userSubscriptionReqDto.user_id = user_id
        return this.userClient.send('UpdatePassword', userSubscriptionReqDto)
    }

}
