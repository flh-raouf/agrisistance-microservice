import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaUserModule } from './.prisma/prisma-user/prisma-user.module';
import { EmailModule } from './.email/email.module';
import { AuthModule } from './auth/auth.module';
import { PrismaLandModule } from './.prisma/prisma-land/prisma-land.module';
import { PrismaNetworkModule } from './.prisma/prisma-network/prisma-network.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ProfileModule,
    AuthModule,
    PrismaUserModule,
    PrismaLandModule,
    PrismaNetworkModule,
    CloudinaryModule,
    EmailModule,
  ],
})
export class UserServiceModule {}
