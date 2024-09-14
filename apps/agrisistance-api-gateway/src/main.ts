import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ValidationPipe } from '@nestjs/common';
import { NotFoundFilter } from './.common/filters/not-found.filter';

async function bootstrap() {
  const app = await NestFactory.create(ApiGatewayModule);

  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
  }));

  // app.useGlobalFilters(new NotFoundFilter())


  const port = process.env.PORT || 9090;
  await app.listen(port).then(() => {
    console.log(`API Gateway is running on port ${port}`)
  }).catch((error) => {
    console.error('Error starting API Gateway', error);
  });
}
bootstrap();
