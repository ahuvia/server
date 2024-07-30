import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    cors: {
      origin: ['http://localhost:3000', 'http://localhost:8080'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
    },
  });

  const configService = app.get(ConfigService);
  console.log(`Connected to database ${configService.get('PG_DATABASE')} on host ${configService.get('PG_HOST')}`);

  app.setGlobalPrefix('api');
  await app.listen(8080);
}
bootstrap();
