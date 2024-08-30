import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transfer } from './transfer.entity';
import { Driver } from '../driver/driver.entity';
import { Vehicle } from '../vehicle/vehicle.entity';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(Transfer)
    private transferRepository: Repository<Transfer>,
  ) {}

  transferVehicle(fromDriver: Driver, toDriver: Driver, vehicle: Vehicle) {
    const transfer = this.transferRepository.create({
      fromDriver,
      toDriver,
      vehicle,
    });
    return this.transferRepository.save(transfer);
  }

  findAll() {
    return this.transferRepository.find({ relations: ['fromDriver', 'toDriver', 'vehicle'] });
  }
}
