import { Data } from 'src/disaster/entities/disaster.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('obstacle_type', { schema: 'Prevent_Disaster' })
export class ObstacleType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('tinyint', { name: 'status', nullable: true, width: 1 })
  status: boolean | null;

  @Column('datetime', { name: 'create_date', nullable: true })
  createDate: Date | null;

  @Column('datetime', { name: 'update_date', nullable: true })
  updateDate: Date | null;

  @Column('datetime', { name: 'delete_date', nullable: true })
  deleteDate: Date | null;

  @Column('int', { name: 'create_by_id', nullable: true })
  createById: number | null;

  @Column('int', { name: 'update_by_id', nullable: true })
  updateById: number | null;

  @Column('int', { name: 'delete_by_id', nullable: true })
  deleteById: number | null;

  @Column('varchar', {
    name: 'obstacle_type_name',
    nullable: false,
    length: 50,
  })
  obstacleTypeName: string | null;

  @Column('varchar', { name: 'note', nullable: true, length: 255 })
  note: string | null;

  @Column('varchar', { name: 'create_by', nullable: true, length: 255 })
  createBy: string | null;

  @Column('varchar', { name: 'update_by', nullable: true, length: 255 })
  updateBy: string | null;

  @Column('varchar', { name: 'delete_by', nullable: true, length: 255 })
  deleteBy: string | null;

  @OneToMany(() => Data, (data) => data.obstacleTypeId)
  @JoinColumn({ name: 'id', referencedColumnName: 'obstacle_type_id' })
  data: Data;
}
