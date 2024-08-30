
import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { TransferService } from './transfer.service';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { Transfer } from './entities/transfer.entity';

@Controller('transfers')
export class TransferController {
  constructor(private readonly transferService: TransferService) {}

  @Post()
  async create(@Body() createTransferDto: CreateTransferDto): Promise<Transfer> {
    return this.transferService.create(createTransferDto);
  }

  @Get()
  async findAll(): Promise<Transfer[]> {
    return this.transferService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Transfer> {
    return this.transferService.findOne(id);
  }
}
