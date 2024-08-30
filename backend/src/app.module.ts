import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Driver } from './driver/driver.entity';
import { Vehicle } from './vehicle/vehicle.entity';
import { Transfer } from './transfer/transfer.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Driver, Vehicle, Transfer],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
