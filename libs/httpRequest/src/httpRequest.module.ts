import { Module } from '@nestjs/common';
import { httpRequestService } from './httpRequest.service';

@Module({
  providers: [httpRequestService],
  exports: [httpRequestService],
})
export class httpRequestModule {}
