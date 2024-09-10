import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from '../../.strategy';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';

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
    controllers: [AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule {}

