import { Module } from '@nestjs/common';

import { LandModule } from './land/land.module';
import { ModelsModule } from './models/models.module';
import { PrismaLandModule } from './.prisma/prisma-land.module';

@Module({
  imports: [ 
    LandModule, 
    ModelsModule, 
    PrismaLandModule
  ],
})
export class ApiGatewayModule {}
