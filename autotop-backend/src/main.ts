import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';

const PORT = 3210;
const SWAGGER_LINK = 'api/explorer';

async function bootstrap() {
  const logger = new Logger('NestApplication');
  const app = await NestFactory.create(AppModule, {
    cors: { origin: true, credentials: true, maxAge: 86400 },
  });
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('AUTOTOP.ge API')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_LINK, app, document);

  app.use(cookieParser());
  await app.listen(PORT);
  logger.log(`> APP STARTED: http://localhost:${PORT}`);
  logger.log(`> EXPLORE APP: http://localhost:${PORT}/${SWAGGER_LINK}`);
}

bootstrap();
