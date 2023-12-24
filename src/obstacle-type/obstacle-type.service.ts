import { Injectable } from '@nestjs/common';
import { CreateObstacleTypeDto } from './dto/create-obstacle-type.dto';
import { UpdateObstacleTypeDto } from './dto/update-obstacle-type.dto';

@Injectable()
export class ObstacleTypeService {
  create(createObstacleTypeDto: CreateObstacleTypeDto) {
    return 'This action adds a new obstacleType';
  }

  findAll() {
    return `This action returns all obstacleType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} obstacleType`;
  }

  update(id: number, updateObstacleTypeDto: UpdateObstacleTypeDto) {
    return `This action updates a #${id} obstacleType`;
  }

  remove(id: number) {
    return `This action removes a #${id} obstacleType`;
  }
}
