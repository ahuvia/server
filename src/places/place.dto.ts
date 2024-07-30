import { IsString, IsNotEmpty, IsOptional, MaxLength, IsEnum } from 'class-validator';
import { EPlace } from 'src/enums';

export class CreatePlaceDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(25)
    name: string;
  
    @IsNotEmpty()
    @IsEnum(EPlace)
    type: EPlace;
  
    @IsString()
    @IsNotEmpty()
    address: string;
  }