import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('Item API')
    .setDescription('My Item API')
    .build());

  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
