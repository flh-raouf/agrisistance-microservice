import { Controller } from "@nestjs/common";
import { LandService } from "./land.service";
import { AddLandDto, UpdateLandDto, UserRequestDto } from "./dto";
import { EventPattern } from "@nestjs/microservices";

@Controller()
export class LandController {
    constructor(private landService: LandService) {}

    @EventPattern('AddLand')
    async createLand(addLandDto: AddLandDto) {
        return await this.landService.addLand(addLandDto);
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
    async updateLandEvent(updateLandDto: UpdateLandDto) {
        return await this.landService.updateLand(updateLandDto);
    }

    @EventPattern('DeleteLand')
    async deleteLandEvent(userRequestDto: UserRequestDto) {
        return await this.landService.deleteLand(userRequestDto);
    }
    
}