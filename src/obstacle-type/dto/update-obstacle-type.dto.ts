import { PartialType } from '@nestjs/mapped-types';
import { CreateObstacleTypeDto } from './create-obstacle-type.dto';

export class UpdateObstacleTypeDto extends PartialType(CreateObstacleTypeDto) {}
