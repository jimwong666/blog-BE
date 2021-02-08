import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { ExceptionModule } from '@libs/exception';
import { GuardModule } from '@libs/guard';

@Module({
	imports: [
		HomeModule, 
		AuthModule, 
		UserModule, 
		GuardModule, 
		ExceptionModule
	],
})
export class AppModule {}
