import { NestFactory } from '@nestjs/core';
import { NetworkServiceModule } from './agrisistance-network-service.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(NetworkServiceModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  const port = process.env.NETWORK_SERVICE_PORT || 9092;
  await app.listen(port).then(() => {
    console.log(`Network service is running on port ${port}`)
  }).catch((error) => {
    console.error('Error starting API Gateway', error);
  });
}
bootstrap();
