import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from '../.strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports:[
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
