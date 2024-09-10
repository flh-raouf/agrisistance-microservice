import { IsString, IsOptional, IsEmail, IsNotEmpty } from "class-validator";
export class UserEmailReqDto {
    @IsString()
    @IsOptional()
    user_id?: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
}