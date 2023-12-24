import { Module } from '@nestjs/common';
import { ObstacleTypeService } from './obstacle-type.service';
import { ObstacleTypeController } from './obstacle-type.controller';

@Module({
  controllers: [ObstacleTypeController],
  providers: [ObstacleTypeService],
})
export class ObstacleTypeModule {}
