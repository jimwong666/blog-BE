import { Module } from '@nestjs/common';
import { AuthGuard } from './guard.service';

@Module({
  providers: [AuthGuard],
  exports: [AuthGuard],
})
export class GuardModule {}
