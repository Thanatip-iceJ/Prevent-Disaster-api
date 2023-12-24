import { ObstacleType } from 'src/obstacle-type/entities/obstacle-type.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('data', { schema: 'Prevent_Disaster' })
export class Data {
  @PrimaryGeneratedColumn({ type: 'int', name: 'obstacle_id' })
  obstacleId: number;

  @Column('int', { name: 'obstacle_type_id', nullable: true })
  obstacleTypeId: number | null;

  @Column('varchar', { name: 'title', nullable: true, length: 50 })
  title: string | null;

  @Column('varchar', { name: 'start_date', nullable: true, length: 20 })
  startDate: string | null;

  @Column('varchar', { name: 'obstacle_status', nullable: true, length: 20 })
  obstacleStatus: string | null;

  @Column('varchar', { name: 'lat', nullable: true, length: 30 })
  lat: string | null;

  @Column('varchar', { name: 'long', nullable: true, length: 30 })
  long: string | null;

  @Column('varchar', { name: 'note', nullable: true, length: 100 })
  note: string | null;

  @Column('tinyint', { name: 'status', nullable: true, default: () => "'0'" })
  status: number | null;

  @Column('varchar', { name: 'create_by', nullable: true, length: 30 })
  createBy: string | null;

  @Column('varchar', { name: 'create_date', nullable: true, length: 20 })
  createDate: string | null;

  @Column('varchar', { name: 'update_by', nullable: true, length: 30 })
  updateBy: string | null;

  @Column('varchar', { name: 'update_date', nullable: true, length: 20 })
  updateDate: string | null;

  @Column('varchar', { name: 'delete_by', nullable: true, length: 20 })
  deleteBy: string | null;

  @Column('varchar', { name: 'delete_date', nullable: true, length: 20 })
  deleteDate: string | null;

  @Column('varchar', { name: 'end_date', nullable: true, length: 20 })
  endDate: string | null;

  @Column('varchar', { name: 'province_name', nullable: true, length: 30 })
  provinceName: string | null;

  @Column('varchar', { name: 'amphoe_name', nullable: true, length: 30 })
  amphoeName: string | null;

  @Column('varchar', { name: 'tambon_name', nullable: true, length: 30 })
  tambonName: string | null;

  @Column('varchar', { name: 'mooban_name', nullable: true, length: 50 })
  moobanName: string | null;

  @Column('varchar', { name: 'province_code', nullable: true, length: 30 })
  provinceCode: string | null;

  @Column('varchar', { name: 'amphoe_code', nullable: true, length: 30 })
  amphoeCode: string | null;

  @Column('varchar', { name: 'tambon_code', nullable: true, length: 30 })
  tambonCode: string | null;

  @Column('varchar', { name: 'mooban_code', nullable: true, length: 30 })
  moobanCode: string | null;

  @ManyToOne(() => ObstacleType, (obstacleType) => obstacleType.id, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'obstacle_type_id', referencedColumnName: 'id' })
  obstacleType: ObstacleType;
}
