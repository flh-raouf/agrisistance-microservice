import { Body, Controller, Delete, Get, Post, Put, Param, HttpCode, HttpStatus, UseGuards } from "@nestjs/common";
import { LandService } from "./land.service";
import { LandDto } from "./dto";
import { JwtGuard } from "../.guard";
import { JwtDecorator } from "../.decorator";


// @UseGuards(JwtGuard)
@Controller('land')
export class LandController {
    constructor(private landService: LandService) {}

    // Hello World

    @Get()
    landServiceHello() {
        return 'Land Service';
    }

    // Add Land
    @Post('add-land')
    @HttpCode(HttpStatus.CREATED)  
    async addLand(
        @JwtDecorator('user_id') user_id: string,
        @Body() landDto: LandDto
    ) {
        return this.landService.addLand(landDto, user_id);
    }

    // Get All Lands
    @Get('get-all-lands')
    @HttpCode(HttpStatus.OK)
    async getAllLands(@JwtDecorator('user_id') user_id: string,) {
        return this.landService.getAllLands(user_id);
    }

    // Get Land By Id
    @Get('get-land/:land_id')
    @HttpCode(HttpStatus.OK)
    async getLandById(
        @JwtDecorator('user_id') user_id: string,
        @Param('land_id') land_id: string,
    ) {
        return this.landService.getLandById(user_id, land_id);
    }

    // Update Land
    @Put('update-land/:land_id')
    @HttpCode(HttpStatus.OK)
    async updateLand(
        @JwtDecorator('user_id') user_id: string,
        @Param('land_id') land_id: string,    
        @Body() landDto:LandDto
    ) {
        return this.landService.updateLand(user_id, land_id, landDto);
    }

    // Delete Land
    @Delete('delete-land/:land_id')
    @HttpCode(HttpStatus.OK)
    async deleteLand(
        @JwtDecorator('user_id') user_id: string,
        @Param('land_id') land_id: string,
    ){
        return this.landService.deleteLand(user_id, land_id);
    }

}