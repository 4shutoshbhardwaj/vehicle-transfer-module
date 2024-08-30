// src/transfer/transfer.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Transfer } from './entities/transfer.entity';
import { CreateTransferDto } from './dto/create-transfer.dto';

@Injectable()
export class TransferService {
  constructor(
    @InjectRepository(Transfer)
    private readonly transferRepository: Repository<Transfer>,
  ) {}

  async create(createTransferDto: CreateTransferDto): Promise<Transfer> {
    const transfer = this.transferRepository.create(createTransferDto);
    return this.transferRepository.save(transfer);
  }

  async findAll(): Promise<Transfer[]> {
    return this.transferRepository.find();
  }

  async findOne(id: number): Promise<Transfer> {
    return this.transferRepository.findOne({ where: { id } });
  }
}
