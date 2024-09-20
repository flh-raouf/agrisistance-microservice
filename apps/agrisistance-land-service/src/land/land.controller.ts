import { Controller, Post, Get, Put, Delete, Body, Query, Param } from '@nestjs/common';
import { LandService } from './land.service';
import { AddLandDto, UpdateLandDto, UserRequestDto } from './dto';

@Controller('land')
export class LandController {
    constructor(private readonly landService: LandService) {}

    @Post('add-land')
    async createLand(
        @Body() addLandDto: AddLandDto,
    ) {
        return await this.landService.addLand(addLandDto);
    }

    @Post('get-all-lands/')
    async getAllLands(
        @Body('user_id') user_id: string,
    ) {
        return await this.landService.getAllLands(user_id);
    }

    @Post('get-land-by-id')
    async getLandById(
        @Body() userRequestDto: UserRequestDto,
    ) {
        return await this.landService.getLandById(userRequestDto);
    }

    @Put('update-land')
    async updateLand(
        @Body() updateLandDto: UpdateLandDto,
    ) {
        return await this.landService.updateLand(updateLandDto);
    }

    @Delete('delete-land')
    async deleteLand(
        @Body() userRequestDto: UserRequestDto,
    ) {
        return await this.landService.deleteLand(userRequestDto);
    }
}
