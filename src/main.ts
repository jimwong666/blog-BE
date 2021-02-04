import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'; // 注入平台，express
import { AppModule } from './app.module';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
    AppModule
  );
  
  app.useStaticAssets(resolve(__dirname, '../public'));
  app.setBaseViewsDir(resolve(__dirname, '../views'));
  app.setViewEngine('ejs');
  
  await app.listen(4000);
}
bootstrap();
