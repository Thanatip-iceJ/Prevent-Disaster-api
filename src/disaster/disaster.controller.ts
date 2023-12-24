import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DisasterService } from './disaster.service';
import { CreateDisasterDto } from './dto/create-disaster.dto';
import { UpdateDisasterDto } from './dto/update-disaster.dto';
import { Data } from './entities/disaster.entity';

@Controller('disaster')
export class DisasterController {
  constructor(private readonly disasterService: DisasterService) {}

  @Post('create')
  create(@Body() reqBody: CreateDisasterDto): Promise<Data> {
    return this.disasterService.create(reqBody);
  }

  @Get()
  findAll() {
    return this.disasterService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.disasterService.findOne(id);
  }

  @Patch('edit/:id')
  update(
    @Param('id') id: string,
    @Body() reqBody: UpdateDisasterDto,
  ): Promise<Data> {
    return this.disasterService.update(+id, reqBody);
  }

  @Patch('softDel/:id')
  softDelete(
    @Param('id') id: string,
    @Body() reqBody: UpdateDisasterDto,
  ): Promise<Data> {
    return this.disasterService.update(+id, reqBody);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.disasterService.remove(+id);
  }
}
