import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'; // 注入平台，express
import { GlobalException } from './exception/global.exception';
import { GlobalGuard } from './guard/global.guard';
import { AppModule } from './app.module';
import { resolve, join } from 'path';
import * as serveStatic from 'serve-static';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use('/public', serveStatic(join(__dirname, '../public')));
  app.use('/', serveStatic(join(__dirname, '../client_dist')));
  // app.useStaticAssets(resolve(__dirname, '../dist'), { prefix: '/dist/' });
  app.setBaseViewsDir(resolve(__dirname, '../views'));
  app.setViewEngine('ejs');

  // 全局注册权限验证守卫
	app.useGlobalGuards(new GlobalGuard());
	// 全局注册通用异常过滤器HttpExceptionFilter
	app.useGlobalFilters(new GlobalException());

  await app.listen(3006);
}
bootstrap();
