import { Module } from '@nestjs/common';
import { LandModule } from './land/land.module';
import { PrismaLandModule} from './prisma/prisma-land.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    LandModule,
    PrismaLandModule,
    CloudinaryModule,
  ],
})
export class LandServiceModule {}
