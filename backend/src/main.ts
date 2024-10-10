import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS for cross-origin requests

  await app.listen(4000);
  console.log('Backend is running on http://localhost:4000');
}
bootstrap();
