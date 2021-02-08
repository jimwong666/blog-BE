import { Test, TestingModule } from '@nestjs/testing';
import { httpRequestService } from './httpRequest.service';

describe('httpRequestService', () => {
  let service: httpRequestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [httpRequestService],
    }).compile();

    service = module.get<httpRequestService>(httpRequestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
