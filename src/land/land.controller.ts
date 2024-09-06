import { Body, Controller, Delete, Get, Post, Put, HttpCode, HttpStatus, Param } from "@nestjs/common";
import { LandService } from "./land.service";
import { LandDto, UserDto } from "./dto";

@Controller()
export class LandController {
    constructor(private landService: LandService) {}

        @Post('land/add-land')
        @HttpCode(HttpStatus.CREATED)
        async addLand(@Body() landDto: LandDto) {
            return await this.landService.addLand(landDto);
        }


        @Get('land/get-all-lands')
        async getAllLands(@Body() userDto: UserDto) {
            return await this.landService.getAllLands(userDto);
        }

        @Get('land/get-land/:land_id')
        async getLandById(
            @Param('land_id') land_id: string,
            @Body() userDto: UserDto
        ) {
            
            return await this.landService.getLandById(userDto, land_id);
        }

        @Put('land/update-land/:land_id')
        async updateLand(
            @Param('land_id') land_id: string,    
            @Body() landDto:LandDto
        ) {
            return await this.landService.updateLand(landDto, land_id);
        }

        @Delete('land/delete-land/:land_id')
        async deleteLand(
            @Param('land_id') land_id: string,
            @Body() userDto: UserDto) {
            return await this.landService.deleteLand(userDto, land_id);
        }

    
}