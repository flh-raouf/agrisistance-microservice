import { Global, Module } from '@nestjs/common';
import { PrismaNetworkService } from './prisma-network.service';

@Global()
@Module({
  providers: [PrismaNetworkService],
  exports: [PrismaNetworkService],
})
export class PrismaLandModule {}
