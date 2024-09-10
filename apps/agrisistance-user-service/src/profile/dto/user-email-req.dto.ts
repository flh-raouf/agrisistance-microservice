import { IsString, IsEmail, IsNotEmpty } from "class-validator";
export class UserEmailReqDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}