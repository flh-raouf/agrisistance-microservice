import { Module } from '@nestjs/common';
import { LandModule } from './land/land.module';
import { PrismaModule } from './prisma/prisma.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    LandModule,
    PrismaModule,
    CloudinaryModule,
  ],
})
export class AppModule {}
