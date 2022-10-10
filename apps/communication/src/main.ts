import { NestFactory } from '@nestjs/core';
import { CommunicationModule } from './communication.module';

async function bootstrap() {
  const app = await NestFactory.create(CommunicationModule);
  await app.listen(3000);
}
bootstrap();
