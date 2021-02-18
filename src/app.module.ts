import { Module } from '@nestjs/common';
import { LoginModule } from './server/login/login.module';
import { ApiController } from './server/api/api.controller';
import { ApiService } from './server/api/api.service';
import { ApiModule } from './server/api/api.module';

@Module({
  imports: [ ApiModule, LoginModule ],
  controllers: [ApiController],
  providers: [ApiService]
})
export class AppModule {}
