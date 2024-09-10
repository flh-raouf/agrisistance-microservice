import { IsString, IsNotEmpty, IsJWT } from "class-validator";

export class ResetPasswordDto {
    @IsString()
    @IsNotEmpty()
    @IsJWT()
    token: string;

    @IsString()
    @IsNotEmpty()
    newPassword: string;
}