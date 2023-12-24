import { Test, TestingModule } from '@nestjs/testing';
import { ObstacleTypeService } from './obstacle-type.service';

describe('ObstacleTypeService', () => {
  let service: ObstacleTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObstacleTypeService],
    }).compile();

    service = module.get<ObstacleTypeService>(ObstacleTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
