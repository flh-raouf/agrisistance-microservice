import { Module } from "@nestjs/common";
import { ModelsController } from "./models.controller";
import { ModelsService } from "./models.service";
import { JwtStrategy } from "../.strategy/jwt.strategy";
import { ConfigModule } from "@nestjs/config";


@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true
        }),
    ],
    controllers: [ModelsController],
    providers: [ModelsService, JwtStrategy],
})
export class ModelsModule {}