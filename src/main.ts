import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'; // 注入平台，express
import { GlobalException } from './exception/global.exception';
import { GlobalInterceptor } from './interceptor/global.interceptor';
import { GlobalGuard } from './guard/global.guard';
import { AppModule } from './app.module';
import { resolve, join } from 'path';
import * as serveStatic from 'serve-static';
import * as serveFavicon from 'serve-favicon';
import * as history from 'connect-history-api-fallback';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.setBaseViewsDir(resolve(__dirname, '../views'));
  app.setViewEngine('ejs');

  // favicon
  app.use(serveFavicon(join(__dirname, '../public', 'favicon.ico')));
  
  // app.useStaticAssets(resolve(__dirname, '../public'), { prefix: '/public/' });
  app.use('/public', serveStatic(join(__dirname, '../public')));
  
  // spa
  app.use(history({
    index:'/client_dist/index.html',
  }));
  app.use('/client_dist', serveStatic(join(__dirname, '../client_dist')));
 

  // 全局注册拦截器
  app.useGlobalInterceptors(new GlobalInterceptor());
  // 全局注册权限验证守卫
	app.useGlobalGuards(new GlobalGuard());
	// 全局注册通用异常过滤器HttpExceptionFilter
	app.useGlobalFilters(new GlobalException());

  await app.listen(3008);
}
bootstrap();
