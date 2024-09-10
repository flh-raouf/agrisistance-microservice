import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';



async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>
  (
    UserServiceModule,
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
