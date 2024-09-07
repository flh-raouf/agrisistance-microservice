import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
  private readonly logger = new Logger(CloudinaryService.name);

  constructor(private readonly configService: ConfigService) {
    // Configure Cloudinary with environment variables
    cloudinary.config({ 
      cloud_name: this.configService.get<string>('CLOUDINARY_CLOUD_NAME'),
      api_key: this.configService.get<string>('CLOUDINARY_API_KEY'),
      api_secret: this.configService.get<string>('CLOUDINARY_API_SECRET')
    });
  }

  // Method to delete an image from Cloudinary
    async deleteImageFromCloudinary(publicId: string, resourceType: string): Promise<void> {
        try {
            const result = await cloudinary.api.delete_resources(
                [`Agrisistance/${resourceType}/${publicId}`],
                { type: 'upload', resource_type: 'image' }
            );
                this.logger.log(`Deleted ${resourceType} with public_id ${publicId}`);
        } catch (error) {
            this.logger.error(`Error deleting ${resourceType} with public_id ${publicId}: ${error.message}`);
        }
  }

  // Method to extract public_id from Cloudinary URL
  extractPublicId(imageUrl: string): string | null {
    try {
        const parts = imageUrl.split('/');
        const lastPart = parts.pop();
        if (!lastPart) {
            throw new Error('Invalid URL format');
        }
        const publicId = lastPart.split('.')[0];
        return publicId;
    } catch (error) {
        this.logger.error('Error extracting public_id:', error.message);
        return null;
    }
  }
}
