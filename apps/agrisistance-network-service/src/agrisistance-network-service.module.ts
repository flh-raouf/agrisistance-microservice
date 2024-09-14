import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PostModule } from './post/post.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { PrismaNetworkModule } from './.prisma/prisma-network.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),

    PostModule,

    CloudinaryModule,
    PrismaNetworkModule
  ],

})
export class NetworkServiceModule {}
