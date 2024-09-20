import { Module } from '@nestjs/common';
import { JwtStrategy } from "../../.strategy/jwt.strategy";
import { ConfigModule } from "@nestjs/config";
import { PostController } from './post.controller';
import { PostService } from './post.service';
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
    controllers: [PostController],
    providers: [PostService, JwtStrategy],
})
export class PostModule {}
