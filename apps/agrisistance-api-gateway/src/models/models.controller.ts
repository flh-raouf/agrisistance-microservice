import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../.guard/jwt.guard";
import { ModelsService } from "./models.service";
import { ChatRequestDto, LandRequestDto } from './dto';
import { JwtDecorator } from "../.decorator";


@Controller('model')
export class ModelsController {
    constructor( private ModelsService: ModelsService) {}

    @UseGuards(JwtGuard)
    @Post('generate-business-plan')
    @HttpCode(HttpStatus.OK)
    async generateBusinessPlan(
        @JwtDecorator('user_id') user_id: string,
        @Body() landRequestDto: LandRequestDto,
    ) {
        return this.ModelsService.generateBusinessPlan(user_id, landRequestDto.land_id);
    }

    @Post('chat-bot')
    @HttpCode(HttpStatus.OK)
    async chatBot(
        @Body() chat_req: ChatRequestDto,
    ) {
        return this.ModelsService.chatBot(chat_req.message);
    }

}