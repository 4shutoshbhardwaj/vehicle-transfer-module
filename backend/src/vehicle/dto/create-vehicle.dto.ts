import { IsString, IsOptional } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  vehicleNumber: string;

  @IsString()
  vehicleType: string;

  @IsOptional()
  @IsString()
  pucCertificate?: string;

  @IsOptional()
  @IsString()
  insuranceCertificate?: string;
}
