
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Transfer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fromDriverId: number;

  @Column()
  toDriverId: number;

  @Column()
  vehicleId: number;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
