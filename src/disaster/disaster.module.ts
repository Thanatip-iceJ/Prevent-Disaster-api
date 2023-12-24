import { Module } from '@nestjs/common';
import { DisasterService } from './disaster.service';
import { DisasterController } from './disaster.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Data } from './entities/disaster.entity';
import { ObstacleType } from 'src/obstacle-type/entities/obstacle-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Data, ObstacleType])],
  controllers: [DisasterController],
  providers: [DisasterService],
})
export class DisasterModule {}
