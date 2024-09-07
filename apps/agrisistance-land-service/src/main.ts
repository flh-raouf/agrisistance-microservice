import { NestFactory } from '@nestjs/core';
import { AppModule } from './land-service.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {

  const app = await NestFactory.createMicroservice<MicroserviceOptions>
  (
    AppModule,
    {
      transport: Transport.TCP,
    },
  );

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  await app.listen();

}
bootstrap();
