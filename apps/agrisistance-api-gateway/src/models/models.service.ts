import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaLandService } from '../.prisma/prisma-land.service';
import fetch from 'node-fetch';



@Injectable()
export class ModelsService {

    constructor( private prisma: PrismaLandService){}

    // Generate business plan
    async generateBusinessPlan(user_id: string, land_id: string) {

        // check if the user is the owner of the land
        const landExists = await this.prisma.land.findFirst({
            where: {
                land_id,
                user_id,
            },
        });

        if (!landExists) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Land not found for the user.',
            }, HttpStatus.NOT_FOUND);
        }

        return 'success';

        // const response = await fetch('https://agrisistance-model-backend.onrender.com/generate-business-plan', {
        //     method: 'POST',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ land_id })
        //   });
          
        // const data = await response.json();
        
        // return data;
    }

    // Chat Bot
    async chatBot(message: string){

        try {

            const response = await fetch('https://agrisistance-model-backend.onrender.com/chat', {  // Adjust the URL if needed
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo',
                    messages: [{ role: 'user', content: message }],
                    max_token: 100,
                    temperature: 0.7,
                    response_format: 'text/plain',
                    user_id: 'agricultural_chatbot'  
                })
                
            });

            const data = await response.json();
            const result = data.response.messages[0].content;

            return result;


        } catch (error) {
            // Log the error and throw an exception
            console.error('Error deleting land:', error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while deleting the land.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }        
    }
}
