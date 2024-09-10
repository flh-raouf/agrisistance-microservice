import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class UserEmailVerifyReqDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}