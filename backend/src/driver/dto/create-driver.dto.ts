import { IsString, IsPhoneNumber, IsOptional } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  name: string;

  @IsPhoneNumber()
  phoneNumber: string;

  @IsOptional()
  @IsString()
  profilePhoto?: string;
}
