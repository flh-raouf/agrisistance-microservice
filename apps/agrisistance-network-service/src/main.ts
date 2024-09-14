import { NestFactory } from '@nestjs/core';
import { NetworkServiceModule } from './agrisistance-network-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>
  (
    NetworkServiceModule,
    {
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 3003,
      },
    },
  );

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  await app.listen();
}
bootstrap();
