import { Inject, Injectable } from '@nestjs/common';
import { AddLandDto, UpdateLandDto, UserRequestDto } from './dto';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';


@Injectable()
export class LandService {

    // Send TCP request to land service
    constructor(
        @Inject('LAND_SERVICE') private readonly landClient: ClientProxy, 
    ) {
        this.landClient = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: '127.0.0.1',
                port: 3002, 
            },
        });
    }

    // Add Land
    addLand( addLandDto: AddLandDto, user_id: string ) {
        addLandDto.user_id = user_id;
        return this.landClient.send( 'AddLand', addLandDto );  
    }

    // Get All Lands
    getAllLands(user_id: string) {    
        return this.landClient.send( 'GetAllLands', user_id );
    }

    // Get Land By Id
    getLandById(user_id: string, land_id: string) {
        const userRequestDto: UserRequestDto = new UserRequestDto(); 
        userRequestDto.user_id = user_id;
        userRequestDto.land_id = land_id;  
        return this.landClient.send( 'GetLandById', userRequestDto );
    }

    // Update Land
    updateLand(user_id: string, land_id: string, updateLandDto: UpdateLandDto ) {
        updateLandDto.user_id = user_id;
        updateLandDto.land_id = land_id;
        return this.landClient.send( 'UpdateLand', updateLandDto );
    }

    // Delete Land
    deleteLand(user_id: string, land_id: string) {
        const userRequestDto: UserRequestDto = new UserRequestDto(); 
        userRequestDto.user_id = user_id;
        userRequestDto.land_id = land_id;
        return this.landClient.send( 'DeleteLand', userRequestDto );
    }
}