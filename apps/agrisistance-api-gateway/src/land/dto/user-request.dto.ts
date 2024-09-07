import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserRequestDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsOptional()
    @IsString()
    land_id?: string;
}