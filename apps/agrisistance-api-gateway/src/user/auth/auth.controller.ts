import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Redirect, UseGuards } from '@nestjs/common';
import { AuthDto, LoginDto, VerifyOtpDto, ResetPasswordDto } from './dto';
import { JwtGuard } from '../../.guard';
import { JwtDecorator } from '../../.decorator';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @Post('register')
    @HttpCode(HttpStatus.CREATED)
    async register(
        @Body() authDto: AuthDto
    ) {
        return this.authService.register(authDto);
    }

    @Get('register/verify/:token')
    @HttpCode(HttpStatus.OK)
    // @Redirect('https://agrisistatnce.netlify.app/auth/email-verified-successfully')
    async verify(
        @Param('token') token: string
    ) {
        return this.authService.verify(token);
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(
        @Body() loginDto: LoginDto
    ) {
        return this.authService.login(loginDto);
    }

    @UseGuards(JwtGuard)
    @Post('verify-otp')
    async verifyOtp(
        @JwtDecorator('user_id') user_id: string,
        @Body() verifyOtpDto: VerifyOtpDto
    ) {
        return this.authService.verifyOtp(user_id, verifyOtpDto);
    }

    @Post('forgot-password')
    async forgotPassword(
        @Body('email') email: string,
    ) {  
        return this.authService.forgotPassword(email);
    }

    @Post('reset-password/:token')
    async resetPassword(
        @Param('token') token: string,
        @Body() resetPasswordDto: ResetPasswordDto,
    ) {
        return this.authService.resetPassword(token, resetPasswordDto);
    }

}
