import { Global, Module } from '@nestjs/common';
import { PrismaLandService } from './prisma-land.service';

@Global()
@Module({
  providers: [PrismaLandService],
  exports: [PrismaLandService],
})
export class PrismaLandModule {}
