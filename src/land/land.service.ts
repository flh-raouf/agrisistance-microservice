import { ForbiddenException, HttpException, HttpStatus } from "@nestjs/common";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { LandDto, UserDto } from "./dto";
import { ConfigService } from "@nestjs/config";
import * as cloudinary from 'cloudinary';
import fetch from 'node-fetch';
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { CloudinaryService } from 'src/cloudinary/cloudinary.service';

@Injectable()
export class LandService {

    constructor(
        private prisma: PrismaService,
        private configService: ConfigService,
        private cloudinaryService: CloudinaryService,
    ) {
        cloudinary.v2.config({
            cloud_name: this.configService.get("CLOUDINARY_CLOUD_NAME"),
            api_key: this.configService.get("CLOUDINARY_API_KEY"),
            api_secret: this.configService.get("CLOUDINARY_API_SECRET"),
        });
    }

    async addLand(landDto: LandDto) {


        // Upload image to Cloudinary if it exists
        if (landDto.land_image) {
            const uploadResult = await cloudinary.v2.uploader.upload(landDto.land_image, {
             folder: 'Agrisistance/Land-Pictures',
            });
            landDto.land_image = uploadResult.secure_url;
        }


        // Get weather data from Tomorrow.io API
        const locationURL = `https://api.tomorrow.io/v4/weather/realtime?location=${landDto.latitude},${landDto.longitude}&units=metric&apikey=${this.configService.get('TOMMOROW_API_KEY')}`;
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
                    latitude: landDto.latitude,
                    longitude: landDto.longitude,
                    land_size: landDto.land_size,
                    land_name: landDto.land_name,
                    land_image: landDto.land_image,
                    ph_level: landDto.ph_level,
                    phosphorus: landDto.phosphorus,
                    potassium: landDto.potassium,
                    oxygen_level: landDto.oxygen_level,
                    nitrogen: landDto.nitrogen,
                    user_id: landDto.user_id,
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
                  investment_amount: landDto.budget,
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

            // Check if the error is due to a duplicate land from Prisma
            if (error instanceof PrismaClientKnownRequestError && error.code === 'P2002') {
                
                throw new ForbiddenException(
                  'Land with the same coordinates already exists taken',
                );
            }
              
            // Log the error and throw an exception
            console.error('Error adding land:', error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while adding the land.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    async getAllLands(userDto: UserDto) {

        try{

            // Fetch all lands for the user
            const lands = await this.prisma.land.findMany({
                where: {
                    user_id: userDto.user_id,
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
            // Log the error and throw an exception
            console.error('Error fetching lands:', error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while fetching lands.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    async getLandById(userDto: UserDto, land_id: string) {
            
            try{

                // Fetch the land and related data
                const [land, weather, cropTypes, landStatistics, cropMaintenance, finance, businessPlan] = await Promise.all([
                    this.prisma.land.findFirst({
                      where: {
                        land_id,
                        user_id: userDto.user_id,
                      },
                    }),
                    this.prisma.weather.findMany({
                      where: { land_id },
                    }),
                    this.prisma.crop.findMany({
                      where: { land_id },
                    }),
                    this.prisma.landStatistic.findMany({
                      where: { land_id },
                    }),
                    this.prisma.cropMaintenance.findMany({
                      where: { land_id },
                    }),
                    this.prisma.finance.findMany({
                      where: { land_id },
                    }),
                    this.prisma.businessPlan.findMany({
                      where: { land_id },
                    }),
                ]);

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
                // Log the error and throw an exception
                console.error('Error fetching land:', error);
                throw new HttpException(
                {
                    status: HttpStatus.INTERNAL_SERVER_ERROR,
                    error: 'An error occurred while fetching the land.',
                }, 
                HttpStatus.INTERNAL_SERVER_ERROR);
            }
    }
    
    async updateLand(landDto: LandDto, land_id: string) {

        try{
            // Check if there is an image to update
            if (landDto.land_image) {
                // Fetch the existing land image
                const existingLand = await this.prisma.land.findUnique({
                  where: { land_id },
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
                const uploadResult = await cloudinary.v2.uploader.upload(landDto.land_image, {
                    folder: 'Agrisistance/Land-Pictures',
                });
                landDto.land_image = uploadResult.secure_url;
            } 

            // Update land data in the database
            await this.prisma.land.update({
                where: { land_id },
                data: {
                    latitude : landDto.latitude,
                    longitude: landDto.longitude,
                    land_size: landDto.land_size,
                    land_name: landDto.land_name,
                    land_image: landDto.land_image,
                    ph_level: landDto.ph_level,
                    phosphorus: landDto.phosphorus,
                    potassium: landDto.potassium,
                    oxygen_level: landDto.oxygen_level,
                    nitrogen: landDto.nitrogen,
                },
            });

            await this.prisma.finance.update({
                where: { land_id },
                data: { investment_amount: landDto.budget },
            });
        
            await this.prisma.weather.update({
                where: { land_id },
                data: { humidity: landDto.humidity },
            });

            // Call the external service to generate a business plan
            // const response = await fetch(
            //     'https://agrisistance-model-backend.onrender.com/generate-business-plan',
            //     {
            //       method: 'POST',
            //       headers: { 'Content-Type': 'application/json' },
            //       body: JSON.stringify({ land_id }),
            //     }
            // );

            // const businessPlan = await response.json();

            return {
                message: 'Land updated successfully',
                land_id,
                //businessplan: businessPlan,
            };


        } catch (error) {
            // Log the error and throw an exception
            console.error('Error fetching lands:', error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while fetching lands.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deleteLand(userDto: UserDto, land_id: string) {

        try{
            // Check if there is an image to delete
            const land = await this.prisma.land.findUnique({
              where: { land_id: land_id },
              select: { land_image: true },
            });

            if (land?.land_image) {
              const publicId = this.cloudinaryService.extractPublicId(land.land_image);
              if (publicId) {
                await this.cloudinaryService.deleteImageFromCloudinary(publicId, 'Land-Pictures');
              }
            }

            // Delete the land and related data from the database
            await Promise.all([
                this.prisma.finance.deleteMany({ where: { land_id: land_id } }),
                this.prisma.weather.deleteMany({ where: { land_id: land_id } }),
                this.prisma.cropMaintenance.deleteMany({ where: { land_id: land_id } }),
                this.prisma.crop.deleteMany({ where: { land_id: land_id } }),
                this.prisma.businessPlan.deleteMany({ where: { land_id: land_id } }),
                this.prisma.landStatistic.deleteMany({ where: { land_id: land_id } }),
                this.prisma.land.delete({where: { land_id: land_id, user_id: userDto.user_id },}),
            ])

            return { message: 'Land deleted successfully' }
        
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