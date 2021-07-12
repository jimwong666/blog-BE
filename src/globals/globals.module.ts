import { Module, Global, HttpModule } from '@nestjs/common';
import { GlobalsService } from './globals.service';

@Global()
@Module({
	imports: [HttpModule],
	providers: [GlobalsService],
	exports: [GlobalsModule]
})
export class GlobalsModule {}
