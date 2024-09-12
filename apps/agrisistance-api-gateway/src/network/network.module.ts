import { Module } from '@nestjs/common';
import { JwtStrategy } from "../.strategy/jwt.strategy";
import { ConfigModule } from "@nestjs/config";
import { NetworkController } from './network.controller';
import { NetworkService } from './network.service';


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
    ],
    controllers: [NetworkController],
    providers: [NetworkService, JwtStrategy],
})
export class NetworkModule {}
