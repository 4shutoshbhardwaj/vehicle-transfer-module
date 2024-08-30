// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Driver } from './driver/entities/driver.entity';
import { Vehicle } from './vehicle/entities/vehicle.entity';
import { Transfer } from './transfer/entities/transfer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql12.freesqldatabase.com',
      port: 3306,
      username: 'sql12728040',
      password: '6teES33BYT',
      database: 'sql12728040',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    Driver,
    Vehicle,
    Transfer,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
