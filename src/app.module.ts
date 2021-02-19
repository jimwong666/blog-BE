import { Module } from '@nestjs/common';
import { LoginModule } from './server/login/login.module';
import { ApiModule } from './server/api/api.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ApiModule, 
    LoginModule 
  ]
})
export class AppModule {}
