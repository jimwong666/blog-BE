import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'; // 注入平台，express
import { GlobalException } from './exception/global.exception';
import { GlobalGuard } from './guard/global.guard';
import { AppModule } from './app.module';
import { resolve } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(resolve(__dirname, '../public'), { prefix: '/public/' });
  app.useStaticAssets(resolve(__dirname, '../dist'), { prefix: '/dist/' });
  app.setBaseViewsDir(resolve(__dirname, '../views'));
  app.setViewEngine('ejs');

  // 全局注册权限验证守卫
	app.useGlobalGuards(new GlobalGuard());
	// 全局注册通用异常过滤器HttpExceptionFilter
	app.useGlobalFilters(new GlobalException());

  await app.listen(3006);
}
bootstrap();
