import { NestFactory } from '@nestjs/core';
import { LandServiceModule } from './land-service.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(LandServiceModule);
  

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  const port = process.env.LAND_SERVICE_PORT || 9093;
  await app.listen(port).then(() => {
    console.log(`Land service is running on port ${port}`)
  }).catch((error) => {
    console.error('Error starting API Gateway', error);
  });

}
bootstrap();
