import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class VerifyOtpDto {
    @IsString()
    @IsOptional()
    user_id?: string;

    @IsNumber()
    @IsNotEmpty()
    otp: string;
}