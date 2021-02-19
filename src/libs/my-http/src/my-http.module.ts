import { Module, HttpModule, DynamicModule, HttpModuleOptions, HttpService } from '@nestjs/common';
import { MyHttpService } from './my-http.service';

@Module({
  providers: [MyHttpService],
  exports: [MyHttpService],
})
export class MyHttpModule extends HttpModule {
  static register = (config?: HttpModuleOptions): DynamicModule => HttpModule.register({
		timeout: 15000,
		maxRedirects: 5,
    ...config
	})
}
