import { Injectable } from '@nestjs/common';
import { AddLandDto, UpdateLandDto, UserRequestDto } from './dto';

@Injectable()
export class LandService {

    private readonly serviceUrl = 'https://agrisistance-land-service.up.railway.app/land'; 

    // Add Land
    async addLand(addLandDto: AddLandDto, user_id: string) {
        addLandDto.user_id = user_id;
        const response = await fetch(`${this.serviceUrl}/add-land`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(addLandDto)
        });
        const data = await response.json();
        return data;
    }

    // Get All Lands
    async getAllLands(user_id: string) {
        const response = await fetch(`${this.serviceUrl}/get-all-lands`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({user_id})
        });
        const data = await response.json();
        return data;
    }

    // Get Land By Id
    async getLandById(user_id: string, land_id: string) {
        const userRequestDto: UserRequestDto = { user_id, land_id };
        const response = await fetch(`${this.serviceUrl}/get-land-by-id`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userRequestDto)
        });
        const data = await response.json();
        return data;
    }

    // Update Land
    async updateLand(user_id: string, land_id: string, updateLandDto: UpdateLandDto) {
        updateLandDto.user_id = user_id;
        updateLandDto.land_id = land_id;
        const response = await fetch(`${this.serviceUrl}/update-land`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateLandDto)
        });
        const data = await response.json();
        return data;
    }

    // Delete Land
    async deleteLand(user_id: string, land_id: string) {
        const userRequestDto: UserRequestDto = { user_id, land_id };
        const response = await fetch(`${this.serviceUrl}/delete-land`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userRequestDto)
        });
        const data = await response.json();
        return data;
    }
}
