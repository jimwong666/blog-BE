import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express'; // 注入平台，express
import { AuthGuard } from '@libs/guard'
import { HttpExceptionFilter } from '@libs/exception'
import { AppModule } from './app.module';
import { resolve } from 'path';

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(
		AppModule
	);

	app.useStaticAssets(resolve(__dirname, '../public'));
	app.setBaseViewsDir(resolve(__dirname, '../views'));
	app.setViewEngine('ejs');

	// 全局注册权限验证守卫
	app.useGlobalGuards(new AuthGuard());
	// 全局注册通用异常过滤器HttpExceptionFilter
	app.useGlobalFilters(new HttpExceptionFilter());

	await app.listen(3009);
}
bootstrap();
