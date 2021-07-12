import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './api.service';
import { MyHttpModule, MyHttpService } from '@libs/my-http/src';

@Module({
	imports: [MyHttpModule.register()],
	controllers: [ApiController],
	providers: [ApiService, MyHttpService]
})
export class ApiModule {}
