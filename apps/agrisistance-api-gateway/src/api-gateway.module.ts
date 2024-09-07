import { Module } from '@nestjs/common';

import { LandModule } from './land/land.module';




@Module({
  imports: [ LandModule ],
  providers: [],
})
export class ApiGatewayModule {}
