import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from '../../.strategy';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        ClientsModule.register([
            {
              name: 'USER_SERVICE',
              transport: Transport.TCP,
            }
        ]),
        JwtModule.register({}),
    ],
    controllers : [ProfileController],
    providers : [ProfileService, JwtStrategy],
})
export class ProfileModule {}