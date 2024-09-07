import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UserRequestDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsString()
    @IsNotEmpty()
    land_id: string;
}