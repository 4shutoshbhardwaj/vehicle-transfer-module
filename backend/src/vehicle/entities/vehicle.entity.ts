import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vehicleNumber: string;

  @Column()
  vehicleType: string;

  @Column({ nullable: true })
  pucCertificate?: string;

  @Column({ nullable: true })
  insuranceCertificate?: string;
}
