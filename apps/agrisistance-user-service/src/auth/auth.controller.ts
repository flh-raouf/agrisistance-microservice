import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { EventPattern } from '@nestjs/microservices';
import { AuthDto, LoginDto, ResetPasswordDto, VerifyOtpDto } from './dto';

@Controller()
export class AuthController {
    constructor(private authService: AuthService) {}

    @EventPattern('register')
    async register(authDto: AuthDto) {
        return this.authService.register(authDto);
    }

    @EventPattern('register-verify')
    async verify(token: string) {
        return this.authService.verify(token);
    }

    @EventPattern('login')
    async login(loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }

    @EventPattern('verify-otp')
    async verifyOtp(verifyOtpDto: VerifyOtpDto) {
        return this.authService.verifyOtp(verifyOtpDto);
    }

    @EventPattern('forgot-password')
    async forgotPassword(email: string) {
        return this.authService.forgotPassword(email);
    }

    @EventPattern('reset-password')
    async resetPassword(resetPasswordDto: ResetPasswordDto) {
        return this.authService.resetPassword(resetPasswordDto);
    }
}
