import { Module } from '@nestjs/common';
import { LoginModule } from './server/login/login.module';

@Module({
  imports: [LoginModule]
})
export class AppModule {}
