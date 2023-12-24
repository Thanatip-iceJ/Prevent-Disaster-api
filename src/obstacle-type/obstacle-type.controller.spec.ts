import { Test, TestingModule } from '@nestjs/testing';
import { ObstacleTypeController } from './obstacle-type.controller';
import { ObstacleTypeService } from './obstacle-type.service';

describe('ObstacleTypeController', () => {
  let controller: ObstacleTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObstacleTypeController],
      providers: [ObstacleTypeService],
    }).compile();

    controller = module.get<ObstacleTypeController>(ObstacleTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
