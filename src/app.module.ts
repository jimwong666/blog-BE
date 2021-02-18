import { Module } from '@nestjs/common';
import { LoginModule } from './server/login/login.module';
import { ApiModule } from './server/api/api.module';

@Module({
  imports: [ ApiModule, LoginModule ]
})
export class AppModule {}
