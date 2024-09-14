import { IsNumber, IsString, IsOptional, IsNotEmpty, IsPositive, Min, Max } from 'class-validator';

export class AddLandDto {

  @IsOptional()
  @IsString()
  land_id?: string;

  @IsNumber()
  @IsNotEmpty()
  latitude: number;

  @IsNumber()
  @IsNotEmpty()
  longtitude: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  land_size: number;

  @IsString()
  @IsNotEmpty()
  land_name: string;

  @IsOptional()
  @IsString()
  land_image?: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0)
  @Max(14)
  ph_level: number;

  @IsNumber()
  @IsNotEmpty()
  phosphorus: number;

  @IsNumber()
  @IsNotEmpty()
  potassium: number;

  @IsNumber()
  @IsNotEmpty()
  oxygen_level: number;

  @IsNumber()
  @IsNotEmpty()
  nitrogen: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  humidity?: number;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  budget: number;

  @IsOptional()
  @IsString()
  user_id?: string;
  
}
