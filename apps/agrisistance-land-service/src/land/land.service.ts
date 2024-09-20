import { ForbiddenException, HttpException, HttpStatus } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { PrismaLandService } from "../.prisma/prisma-land.service";
import { AddLandDto, UpdateLandDto, UserRequestDto } from "./dto";
import { ConfigService } from "@nestjs/config";
import * as cloudinary from 'cloudinary';
import fetch from 'node-fetch';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { CloudinaryService } from '../cloudinary/cloudinary.service';

@Injectable()
export class LandService {

    constructor(
        private prisma: PrismaLandService,
        private configService: ConfigService,
        private cloudinaryService: CloudinaryService,
    ) {
        cloudinary.v2.config({
            cloud_name: this.configService.get("CLOUDINARY_CLOUD_NAME"),
            api_key: this.configService.get("CLOUDINARY_API_KEY"),
            api_secret: this.configService.get("CLOUDINARY_API_SECRET"),
        });
    }

    async addLand(addlandDto: AddLandDto) {

        // Upload image to Cloudinary if it exists
        if (addlandDto.land_image) {
            const uploadResult = await cloudinary.v2.uploader.upload(addlandDto.land_image, {
             folder: 'Agrisistance/Land-Pictures',
            });
            addlandDto.land_image = uploadResult.secure_url;
        }


        // Get weather data from Tomorrow.io API
        const locationURL = `https://api.tomorrow.io/v4/weather/realtime?location=${addlandDto.latitude},${addlandDto.longtitude}&units=metric&apikey=${this.configService.get('TOMMOROW_API_KEY')}`;
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        };

        const response = await fetch(locationURL, options);
        const weatherData: any = await response.json();
        const { temperature, humidity, precipitationProbability, uvIndex } = weatherData.data.values || {};

        // Add land to the database
        try{
            const land = await this.prisma.land.create({
                data: {
                    latitude: addlandDto.latitude,
                    longitude: addlandDto.longtitude,
                    land_size: addlandDto.land_size,
                    land_name: addlandDto.land_name,
                    land_image: addlandDto.land_image,
                    ph_level: addlandDto.ph_level,
                    phosphorus: addlandDto.phosphorus,
                    potassium: addlandDto.potassium,
                    oxygen_level: addlandDto.oxygen_level,
                    nitrogen: addlandDto.nitrogen,
                    user_id: addlandDto.user_id,
                },
                select: {
                    land_id: true,
                    longitude: true,
                    latitude: true,
                    land_size: true,
                    land_name: true,
                    land_image: true,
                },
            });

            await this.prisma.finance.create({
                data: {
                  investment_amount: addlandDto.budget,
                  land_id: land.land_id,
                },
            });

            await this.prisma.weather.create({
                data: {
                    temperature,
                    humidity,
                    rainfall: precipitationProbability,
                    sunlight: uvIndex,
                    land_id: land.land_id,
                },
            });

            // Return the land data
            return { message: 'Land added successfully', land_id: land.land_id };

        } catch (error) {
            console.error('Error adding land:', error);

            // Check if the error is due to a duplicate land from Prisma
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
                return {
                    statusCode: HttpStatus.FORBIDDEN,
                    timestamp: new Date().toISOString(),
                    path: '/add-land',
                    message: 'Land with the same coordinates already exists.',
                };
            }

            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/add-land',
                message: 'An error occurred while adding the land.',
            };
        }
    }

    async getAllLands(user_id: string) {

        try{

            // Fetch all lands for the user
            const lands = await this.prisma.land.findMany({
                where: {
                    user_id,
                },
                select: {
                    land_id: true,
                    latitude: true,
                    longitude: true,
                    land_size: true,
                    land_name: true,
                    land_image: true,
                },
            });

            // Check if no lands were found
            if (lands.length === 0) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'No lands found for the user.',
                }, HttpStatus.NOT_FOUND);
            }

            // Return the lands
            return lands;

        } catch (error) {
            console.error('Error fetching lands:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/get-all-lands',
                message: 'An error occurred while fetching lands.',
            };
        }

    }

    async getLandById(userRequestDto: UserRequestDto) {
            
        try{
            // Check if land exists for the user
            const landExists = await this.prisma.land.findFirst({
                where: {
                    land_id: userRequestDto.land_id,
                    user_id: userRequestDto.user_id,
                },
            });
            if (!landExists) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Land not found for the user.',
                }, HttpStatus.NOT_FOUND);
            }

            // Fetch the land and related data
            const land = await this.prisma.land.findFirst({
              where: {
                land_id: userRequestDto.land_id,
                user_id: userRequestDto.user_id,
              },
            })

            const weather = this.prisma.weather.findMany({
              where: { land_id: userRequestDto.land_id },
            })
            
            const cropTypes = this.prisma.crop.findMany({
              where: { land_id: userRequestDto.land_id },
            })
            
            const landStatistics = this.prisma.landStatistic.findMany({
              where: { land_id: userRequestDto.land_id },
            })
            
            const cropMaintenance = this.prisma.cropMaintenance.findMany({
              where: { land_id: userRequestDto.land_id },
            })
            
            const finance = this.prisma.finance.findMany({
              where: { land_id: userRequestDto.land_id },
            })
            
            
            const businessPlan = this.prisma.businessPlan.findMany({
              where: { land_id: userRequestDto.land_id },
            })
            
            // Check if the land was not found
            if (!land) {
              throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Land not found for the user.',
              }, HttpStatus.NOT_FOUND);
            }
            // Return the land and related data
            return {
              crops: cropTypes,
              land,
              crop_maintenance: cropMaintenance,
              weather,
              land_statistics: landStatistics,
              finance,
              business_plan: businessPlan,
            } 

        } catch (error) {
            console.error('Error fetching land:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/get-land-by-id',
                message: 'An error occurred while fetching the land.',
            };
        }
    }
    
    async updateLand(updateLandDto: UpdateLandDto) {

        try{
            // Check if land exists for the user
            const landExists = await this.prisma.land.findFirst({
                where: {
                    land_id: updateLandDto.land_id,
                    user_id: updateLandDto.user_id,
                },
            });

            if (!landExists) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Land not found for the user.',
                }, HttpStatus.NOT_FOUND);
            }

            // Check if there is an image to update
            if (updateLandDto.land_image) {
                // Fetch the existing land image
                const existingLand = await this.prisma.land.findUnique({
                  where: { land_id: updateLandDto.land_id },
                  select: { land_image: true },
                });
            
                // delete the existing image from Cloudinary
                if (existingLand?.land_image) {
                  const publicId = this.cloudinaryService.extractPublicId(existingLand.land_image);
                  if (publicId) {
                    await this.cloudinaryService.deleteImageFromCloudinary(publicId, 'Land-Pictures');
                  }
                }
                // Upload the new image to Cloudinary
                const uploadResult = await cloudinary.v2.uploader.upload(updateLandDto.land_image, {
                    folder: 'Agrisistance/Land-Pictures',
                });
                updateLandDto.land_image = uploadResult.secure_url;
            } 

            // Update land data in the database
            await this.prisma.land.update({
                where: { land_id: updateLandDto.land_id },
                data: {
                    latitude : updateLandDto.latitude,
                    longitude: updateLandDto.longtitude,
                    land_size: updateLandDto.land_size,
                    land_name: updateLandDto.land_name,
                    land_image: updateLandDto.land_image,
                    ph_level: updateLandDto.ph_level,
                    phosphorus: updateLandDto.phosphorus,
                    potassium: updateLandDto.potassium,
                    oxygen_level: updateLandDto.oxygen_level,
                    nitrogen: updateLandDto.nitrogen,
                },
            });

            await this.prisma.finance.update({
                where: { land_id: updateLandDto.land_id },
                data: { investment_amount: updateLandDto.budget },
            });
        
            await this.prisma.weather.update({
                where: { land_id: updateLandDto.land_id },
                data: { humidity: updateLandDto.humidity },
            });

            // Call the external service to generate a business plan
            const response = await fetch(
                'https://agrisistance-model-microservice-production.up.railway.app/generate-business-plan',
                {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ land_id: updateLandDto.land_id }),
                }
            );

            const businessPlan = await response.json();

            return {
                message: 'Land updated successfully',
                land_id: updateLandDto.land_id,
                businessplan: businessPlan,
            };


        } catch (error) {
            console.error('Error updating land:', error);

            // Check if the error is a Prisma client known request error
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
                return {
                    statusCode: HttpStatus.FORBIDDEN,
                    timestamp: new Date().toISOString(),
                    path: '/update-land',
                    message: 'Land with the same coordinates already exists.',
                };
            }

            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/update-land',
                message: 'An error occurred while updating the land.',
            };
        }
    }

    async deleteLand(userRequestDto: UserRequestDto) {

        try{

            // Check if land exists for the user
            const landExists = await this.prisma.land.findFirst({
                where: {
                    land_id: userRequestDto.land_id,
                    user_id: userRequestDto.user_id,
                },
            });

            if (!landExists) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Land not found for the user.',
                }, HttpStatus.NOT_FOUND);
            }
            
            // Check if there is an image to delete
            const land = await this.prisma.land.findUnique({
              where: { land_id: userRequestDto.land_id },
              select: { land_image: true },
            });

            if (land?.land_image) {
              const publicId = this.cloudinaryService.extractPublicId(land.land_image);
              if (publicId) {
                await this.cloudinaryService.deleteImageFromCloudinary(publicId, 'Land-Pictures');
              }
            }

            // Delete the land and related data from the database
            
            await this.prisma.finance.deleteMany({ where: { land_id: userRequestDto.land_id } })
            await this.prisma.weather.deleteMany({ where: { land_id: userRequestDto.land_id } })
            await this.prisma.cropMaintenance.deleteMany({ where: { land_id: userRequestDto.land_id } })
            await this.prisma.crop.deleteMany({ where: { land_id: userRequestDto.land_id } })
            await this.prisma.businessPlan.deleteMany({ where: { land_id: userRequestDto.land_id } })
            await this.prisma.landStatistic.deleteMany({ where: { land_id: userRequestDto.land_id } })
            await this.prisma.land.delete({where: { land_id: userRequestDto.land_id, user_id: userRequestDto.user_id },})
    

            return { message: 'Land deleted successfully' }
        
        } catch (error) {
            console.error('Error deleting land:', error);

            // Check if the error is a Prisma client known request error
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
                return {
                    statusCode: HttpStatus.FORBIDDEN,
                    timestamp: new Date().toISOString(),
                    path: '/delete-land',
                    message: 'Land with the same coordinates already exists.',
                };
            }

            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/delete-land',
                message: 'An error occurred while deleting the land.',
            };
        }
    }
}