import { Test, TestingModule } from '@nestjs/testing';
import { MyHttpService } from './my-http.service';

describe('MyHttpService', () => {
	let service: MyHttpService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [MyHttpService]
		}).compile();

		service = module.get<MyHttpService>(MyHttpService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});
});
