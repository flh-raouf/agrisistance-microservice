import { IsString, IsOptional, IsNotEmpty, Matches, MinLength } from "class-validator";
export class UserPasswordReqDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(/[0-9]/, { message: 'Password must contain a number' })
    @Matches(/[a-z]/, { message: 'Password must contain a lowercase letter' })
    @Matches(/[A-Z]/, { message: 'Password must contain an uppercase letter' })
    @Matches(/[!@#$%^&*(),.?"':;{}|<>-_]/, { message: 'Password must contain a special character' })
    oldPassword: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(/[0-9]/, { message: 'Password must contain a number' })
    @Matches(/[a-z]/, { message: 'Password must contain a lowercase letter' })
    @Matches(/[A-Z]/, { message: 'Password must contain an uppercase letter' })
    @Matches(/[!@#$%^&*(),.?"':;{}|<>-_]/, { message: 'Password must contain a special character' })
    newPassword: string;
}