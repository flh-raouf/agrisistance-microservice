import { NestFactory } from '@nestjs/core';
import { LandServiceModule } from './land-service.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>
  (
    LandServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.LAND_HOST || '0.0.0.0',
        port: Number(process.env.KAND_PORT) || 9092,
      },
    },
  );

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  await app.listen();

}
bootstrap();
