import { IsNumber, IsString, IsOptional, IsNotEmpty, IsPositive, Min, Max } from 'class-validator';

export class UpdateLandDto {

  @IsNotEmpty()
  @IsString()
  land_id: string;

  @IsNumber()
  @IsOptional()
  latitude?: number;

  @IsNumber()
  @IsOptional()
  longtitude?: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  land_size?: number;

  @IsString()
  @IsOptional()
  land_name?: string;

  @IsOptional()
  @IsString()
  land_image?: string;

  @IsNumber()
  @IsOptional()
  @Min(0)
  @Max(14)
  ph_level?: number;

  @IsNumber()
  @IsOptional()
  phosphorus?: number;

  @IsNumber()
  @IsOptional()
  potassium?: number;

  @IsNumber()
  @IsOptional()
  oxygen_level?: number;

  @IsNumber()
  @IsOptional()
  nitrogen?: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  @Max(100)
  humidity?: number;

  @IsNumber()
  @IsOptional()
  @IsPositive()
  budget?: number;

  @IsNotEmpty()
  @IsString()
  user_id?: string;
  
}
