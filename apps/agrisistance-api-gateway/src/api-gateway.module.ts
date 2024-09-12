import { Module } from '@nestjs/common';

import { LandModule } from './land/land.module';
import { ModelsModule } from './models/models.module';
import { PrismaLandModule } from './.prisma/prisma-land.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ProfileModule } from './user/profile/profile.module';
import { AuthModule } from './user/auth/auth.module';
import { NetworkService } from './network/network.service';
import { NetworkController } from './network/network.controller';
import { NetworkModule } from './network/network.module';

@Module({
  imports: [ 
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10
    }]),
    LandModule, 
    ModelsModule, 
    ProfileModule,
    NetworkModule,
    AuthModule,
    PrismaLandModule,
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }],
})
export class ApiGatewayModule {}
