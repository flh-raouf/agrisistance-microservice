import { Module } from '@nestjs/common';

import { LandModule } from './land/land.module';
import { ModelsModule } from './models/models.module';
import { PrismaLandModule } from './.prisma/prisma-land.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ProfileModule } from './user/profile/profile.module';
import { AuthModule } from './user/auth/auth.module';

@Module({
  imports: [ 
    ThrottlerModule.forRoot([{
      ttl: 60000,
      limit: 10
    }]),
    LandModule, 
    ModelsModule, 
    ProfileModule,
    AuthModule,
    PrismaLandModule,
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }],
})
export class ApiGatewayModule {}
