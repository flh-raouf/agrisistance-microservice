import { Injectable } from '@nestjs/common';
import { ProfileDto, UserEmailReqDto, UserEmailVerifyReqDto, UserPasswordReqDto, UserSubscriptionReqDto } from './dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import fetch from 'node-fetch';

@Injectable()
export class ProfileService {

    private readonly serviceUrl = 'https://agrisistance-user-service.up.railway.app/profile';

    constructor(
        private jwtService: JwtService,
        private config: ConfigService,
    ) {}

    async getProfile(user_id: string) {
        const response = await fetch(`${this.serviceUrl}/get-profile`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id })
        });
        const data = await response.json();
        return data;
    }


    async updateProfile(user_id: string, profileDto: ProfileDto) {
        profileDto.user_id = user_id;
        const response = await fetch(`${this.serviceUrl}/update-profile`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(profileDto)
        });
        const data = await response.json();
        return data;
    }

    async deleteProfile(user_id: string) {
        const response = await fetch(`${this.serviceUrl}/delete-profile`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id })
        });
        const data = await response.json();
        return data;
    }

    async updateEmail(user_id: string, userEmailReqDto: UserEmailReqDto) {
        userEmailReqDto.user_id = user_id;
        const response = await fetch(`${this.serviceUrl}/update-email`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userEmailReqDto)
        });
        const data = await response.json();
        return data;
    }

    async veirfyUpdateEmail(token: string) {
        
        const payload = await this.jwtService.verifyAsync(token, { secret: this.config.get('JWT_SECRET')} );

        const userEmailVerifyReq: UserEmailVerifyReqDto = new UserEmailVerifyReqDto();
        userEmailVerifyReq.user_id = payload.user_id;
        userEmailVerifyReq.email = payload.email;

        const response = await fetch(`${this.serviceUrl}/verify-update-email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userEmailVerifyReq)
        });
        const data = await response.json();
        return data;
    }

    async updatePassword(user_id: string, userPasswordReqDto: UserPasswordReqDto){
        userPasswordReqDto.user_id = user_id
        const response = await fetch(`${this.serviceUrl}/update-password`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userPasswordReqDto)
        });
        const data = await response.json();
        return data;
    }

    async updateSubscription(user_id: string, userSubscriptionReqDto: UserSubscriptionReqDto){
        userSubscriptionReqDto.user_id = user_id
        const response = await fetch(`${this.serviceUrl}/update-subscription`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userSubscriptionReqDto)
        });
        const data = await response.json();
        return data;
    }

}
