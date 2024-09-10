import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class VerifyOtpDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsNumber()
    @IsNotEmpty()
    otp: string;
}