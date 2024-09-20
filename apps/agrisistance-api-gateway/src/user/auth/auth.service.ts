import { Injectable } from '@nestjs/common';
import { AuthDto, LoginDto, ResetPasswordDto, VerifyOtpDto } from './dto';

@Injectable()
export class AuthService {

    private readonly serviceUrl = 'https://agrisistance-user-service.up.railway.app/auth'; 

    // Register
    async register(authDto: AuthDto) {
        console.log(authDto);
        const response = await fetch(`${this.serviceUrl}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(authDto)
        });
        const data = await response.json();
        return data;
    }

    // Verify Registration
    async verify(token: string) {
        const response = await fetch(`${this.serviceUrl}/register-verify`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ token })
        });
        const data = await response.json();
        return data;
    }

    // Login
    async login(loginDto: LoginDto) {
        const response = await fetch(`${this.serviceUrl}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginDto)
        });
        const data = await response.json();
        return data;
    }

    // Verify OTP
    async verifyOtp(user_id: string, verifyOtpDto: VerifyOtpDto) {
        verifyOtpDto.user_id = user_id;
        const response = await fetch(`${this.serviceUrl}/verify-otp`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(verifyOtpDto)
        });
        const data = await response.json();
        return data;
    }

    // Forgot Password
    async forgotPassword(email: string) {
        const response = await fetch(`${this.serviceUrl}/forgot-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await response.json();
        return data;
    }

    // Reset Password
    async resetPassword(token: string, resetPasswordDto: ResetPasswordDto) {
        resetPasswordDto.token = token;
        const response = await fetch(`${this.serviceUrl}/reset-password`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(resetPasswordDto)
        });
        const data = await response.json();
        return data;
    }
}
