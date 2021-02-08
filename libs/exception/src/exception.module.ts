import { Module } from '@nestjs/common';
import { HttpExceptionFilter } from './exception.service';

@Module({
  providers: [HttpExceptionFilter],
  exports: [HttpExceptionFilter],
})
export class ExceptionModule {}
