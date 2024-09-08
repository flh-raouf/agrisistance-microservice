import { IsNotEmpty, IsString } from "class-validator";

export class LandRequestDto {
    @IsString()
    @IsNotEmpty()
    land_id: string;
}