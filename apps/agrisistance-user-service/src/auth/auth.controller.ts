import { Controller, Post, Body, Query } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto, LoginDto, ResetPasswordDto, VerifyOtpDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('register')
    async register(
        @Body() authDto: AuthDto,
    ) {
        return await this.authService.register(authDto);
    }

    @Post('register-verify')
    async verify(
        @Body('token') token: string,
    ) {
        return await this.authService.verify(token);
    }

    @Post('login')
    async login(
        @Body() loginDto: LoginDto,
    ) {
        return await this.authService.login(loginDto);
    }

    @Post('verify-otp')
    async verifyOtp(
        @Body() verifyOtpDto: VerifyOtpDto,
    ) {
        return await this.authService.verifyOtp(verifyOtpDto);
    }

    @Post('forgot-password')
    async forgotPassword(
        @Body('email') email: string,
    ) {
        return await this.authService.forgotPassword(email);
    }

    @Post('reset-password')
    async resetPassword(
        @Body() resetPasswordDto: ResetPasswordDto,
    ) {
        return await this.authService.resetPassword(resetPasswordDto);
    }
}
