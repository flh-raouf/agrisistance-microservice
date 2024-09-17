import { Module } from '@nestjs/common';

import { LandModule } from './land/land.module';
import { ModelsModule } from './models/models.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
import { ProfileModule } from './user/profile/profile.module';
import { AuthModule } from './user/auth/auth.module';
import { NetworkModule } from './network/network.module';
import { ApiGatewayController } from './api-gateway.controller';

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
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  }],
  controllers: [ApiGatewayController],
})
export class ApiGatewayModule {}
