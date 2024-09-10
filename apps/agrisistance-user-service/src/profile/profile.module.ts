import { Module } from '@nestjs/common';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { JwtStrategy } from '../.strategy/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports:[
        JwtModule.register({
            global: true,
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: '10m' },
        }),
    ],
    controllers: [ProfileController],
    providers: [ProfileService, JwtStrategy],
})
export class ProfileModule {}
