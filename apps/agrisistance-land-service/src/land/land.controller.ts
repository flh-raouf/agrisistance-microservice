import { Body, Controller, Delete, Get, Post, Put, Param } from "@nestjs/common";
import { LandService } from "./land.service";
import { LandDto, UserRequestDto } from "./dto";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class LandController {
    constructor(private landService: LandService) {}

        @EventPattern('AddLand')
        async createLand(landDto: LandDto) {
            return await this.landService.addLand(landDto);
        }

        @EventPattern('GetAllLands')
        async getAllLandsEvent(user_id: string) {
            return await this.landService.getAllLands(user_id);
        }

        @EventPattern('GetLandById')
        async getLandByIdEvent(userRequestDto: UserRequestDto) {
            return await this.landService.getLandById(userRequestDto);
        }

        @EventPattern('UpdateLand')
        async updateLandEvent(landDto: LandDto) {
            return await this.landService.updateLand(landDto);
        }

        @EventPattern('DeleteLand')
        async deleteLandEvent(userRequestDto: UserRequestDto) {
            return await this.landService.deleteLand(userRequestDto);
        }
    
}