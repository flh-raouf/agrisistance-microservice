import { IsOptional, IsString, IsNotEmpty, IsJWT } from "class-validator";

export class ResetPasswordDto {
    @IsString()
    @IsOptional()
    @IsJWT()
    token?: string;

    @IsString()
    @IsNotEmpty()
    newPassword: string;
}