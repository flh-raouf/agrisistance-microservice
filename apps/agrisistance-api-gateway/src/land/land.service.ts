import { Inject, Injectable } from '@nestjs/common';
import { LandDto, UserRequestDto } from './dto';
import { ClientProxy } from '@nestjs/microservices';


@Injectable()
export class LandService {

    // Send TCP request to land service
    constructor(
        @Inject('LAND_SERVICE') private readonly landClient: ClientProxy, 
    ) {}

    // Add Land
    addLand( landDto: LandDto, user_id: string ) {
        landDto.user_id = user_id;
        return this.landClient.send( 'AddLand', landDto );  
    }

    // Get All Lands
    getAllLands(user_id: string) {    
        return this.landClient.send( 'GetAllLands', user_id );
    }

    // Get Land By Id
    getLandById(user_id: string, land_id: string) {
        let userRequestDto: UserRequestDto = new UserRequestDto(); 
        userRequestDto.user_id = user_id;
        userRequestDto.land_id = land_id;  
        return this.landClient.send( 'GetLandById', userRequestDto );
    }

    // Update Land
    updateLand(user_id: string, land_id: string, landDto: LandDto ) {
        landDto.user_id = user_id;
        landDto.land_id = land_id;
        return this.landClient.send( 'UpdateLand', landDto );
    }

    // Delete Land
    deleteLand(user_id: string, land_id: string) {
        let userRequestDto: UserRequestDto = new UserRequestDto(); 
        userRequestDto.user_id = user_id;
        userRequestDto.land_id = land_id;
        return this.landClient.send( 'DeleteLand', userRequestDto );
    }
}