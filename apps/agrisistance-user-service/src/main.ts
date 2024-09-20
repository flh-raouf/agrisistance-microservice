import { NestFactory } from '@nestjs/core';
import { UserServiceModule } from './user-service.module';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';



async function bootstrap() {
  const app = await NestFactory.create(UserServiceModule);

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));
  const port = process.env.USER_SERVICE_PORT || 9093;
  await app.listen(port).then(() => {
    console.log(`User service is running on port ${port}`)
  }).catch((error) => {
    console.error('Error starting API Gateway', error);
  });
}
bootstrap();
