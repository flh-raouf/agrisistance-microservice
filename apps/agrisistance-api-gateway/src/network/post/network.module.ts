import { Module } from '@nestjs/common';
import { JwtStrategy } from "../.strategy/jwt.strategy";
import { ConfigModule } from "@nestjs/config";
import { NetworkController } from './post.controller';
import { NetworkService } from './post.service';
import { ClientsModule, Transport } from '@nestjs/microservices';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
        ClientsModule.register([
            {
              name: 'NETWORK_SERVICE',
              transport: Transport.TCP,
            }
        ]),
    ],
    controllers: [NetworkController],
    providers: [NetworkService, JwtStrategy],
})
export class NetworkModule {}
