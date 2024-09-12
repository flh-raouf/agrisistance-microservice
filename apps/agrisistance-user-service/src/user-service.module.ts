import { Module } from '@nestjs/common';
import { ProfileModule } from './profile/profile.module';
import { ConfigModule } from '@nestjs/config';
import { PrismaUserModule } from './.prisma/prisma-user/prisma-user.module';
import { EmailModule } from './.email/email.module';
import { AuthModule } from './auth/auth.module';
import { PrismaLandModule } from './.prisma/prisma-land/prisma-land.module';
import { PrismaNetworkModule } from './.prisma/prisma-network/prisma-network.module';
import { CloudinaryModule } from './cloudinary/cloudinary.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ScheduleTaskService } from './events/schedule.service';



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

    ScheduleModule.forRoot(),
    ScheduleTaskService,
  ],
})
export class UserServiceModule {}
