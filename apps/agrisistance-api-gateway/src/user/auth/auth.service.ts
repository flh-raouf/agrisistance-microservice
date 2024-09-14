import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { AuthDto, LoginDto, ResetPasswordDto, VerifyOtpDto } from './dto';

@Injectable()
export class AuthService {
   
    constructor(
        @Inject('USER_SERVICE') private readonly userClient: ClientProxy, 
    ) {
        this.userClient = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 3001, 
            },
        });
    }


    async register(authDto: AuthDto) {
        return this.userClient.send('register', authDto);
    }

    async verify(token: string) {
        return this.userClient.send('register-verify', token);
    }

    async login(loginDto: LoginDto) {
        return this.userClient.send('login', loginDto);
    }

    async verifyOtp(user_id: string, verifyOtpDto: VerifyOtpDto) {
        verifyOtpDto.user_id = user_id;
        return this.userClient.send('verify-otp', verifyOtpDto);
    }

    async forgotPassword(email: string) {
        return this.userClient.send('forgot-password', email);
    }

    async resetPassword(token: string, resetPasswordDto: ResetPasswordDto) {
        resetPasswordDto.token = token
        return this.userClient.send('reset-password', resetPasswordDto);
    }
}
