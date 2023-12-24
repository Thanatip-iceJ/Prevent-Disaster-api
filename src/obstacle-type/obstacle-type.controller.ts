import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ObstacleTypeService } from './obstacle-type.service';
import { CreateObstacleTypeDto } from './dto/create-obstacle-type.dto';
import { UpdateObstacleTypeDto } from './dto/update-obstacle-type.dto';

@Controller('obstacle-type')
export class ObstacleTypeController {
  constructor(private readonly obstacleTypeService: ObstacleTypeService) {}

  @Post()
  create(@Body() createObstacleTypeDto: CreateObstacleTypeDto) {
    return this.obstacleTypeService.create(createObstacleTypeDto);
  }

  @Get()
  findAll() {
    return this.obstacleTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.obstacleTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateObstacleTypeDto: UpdateObstacleTypeDto) {
    return this.obstacleTypeService.update(+id, updateObstacleTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.obstacleTypeService.remove(+id);
  }
}
