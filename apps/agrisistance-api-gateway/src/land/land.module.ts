import { Module } from '@nestjs/common';
import { LandController } from './land.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LandService } from './land.service';
import { ConfigModule } from '@nestjs/config';
import { JwtStrategy } from '../.strategy';

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        ClientsModule.register([
            {
              name: 'LAND_SERVICE',
              transport: Transport.TCP,
            }
        ]),
    ],
    controllers : [LandController],
    providers : [LandService, JwtStrategy],
})
export class LandModule {}
