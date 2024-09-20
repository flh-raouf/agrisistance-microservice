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
import { ScheduleTaskModule } from './.events/schedule.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProfileModule,
    AuthModule,

    PrismaUserModule,
    PrismaLandModule,
    PrismaNetworkModule,

    CloudinaryModule,
    EmailModule,

    ScheduleModule.forRoot(),
    ScheduleTaskModule,

    CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {

        const store = await redisStore({
          ttl: 10 * 60 * 1000,
          socket: {
            host: process.env.REDIS_HOST || '0.0.0.0',
            port: 6379,
          }
        });

        return { store }
      }
    })
  ],
})
export class UserServiceModule {}
