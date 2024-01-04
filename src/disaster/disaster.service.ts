import { Injectable, NotFoundException, Param } from '@nestjs/common';
import { CreateDisasterDto } from './dto/create-disaster.dto';
import { UpdateDisasterDto } from './dto/update-disaster.dto';
import { Data } from './entities/disaster.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { ObstacleType } from 'src/obstacle-type/entities/obstacle-type.entity';

@Injectable()
export class DisasterService {
  constructor(@InjectRepository(Data) private dataRepo: Repository<Data>) {}

  async create(reqBody: CreateDisasterDto) {
    console.log(reqBody);
    const res = await this.dataRepo.save(reqBody);
    console.log('RES', res);
    return res;
  }

  private async getAll() {
    const data = await this.dataRepo
      .createQueryBuilder('data')
      .innerJoinAndMapMany(
        'data.obstacleType',
        ObstacleType,
        'obstacleType',
        'data.obstacle_type_id = obstacleType.id',
      )
      .where('data.deleteDate = "" OR data.deleteDate IS NULL')
      .orderBy('data.obstacleId')
      .getMany();

    return data;
  }
  async findAll() {
    return this.getAll();
  }

  async findOne(id: string) {
    return (await this.getAll()).filter((x) => x.obstacleId == +id);
  }

  async update(id: number, reqBody: UpdateDisasterDto) {
    const found = await this.dataRepo.findOne({ where: { obstacleId: id } });
    if (!found) {
      throw new NotFoundException("The report doesn't exist.");
    }
    Object.assign(found, reqBody);
    return this.dataRepo.save(found);
  }

  async softDelete(id: number, reqBody: UpdateDisasterDto) {
    const found = await this.dataRepo.findOne({ where: { obstacleId: id } });
    if (!found) {
      throw new NotFoundException("The report doesn't exist.");
    }
    Object.assign(found, reqBody);
    return this.dataRepo.save(found);
  }

  remove(id: number) {
    return `This action removes a #${id} disaster`;
  }
}
