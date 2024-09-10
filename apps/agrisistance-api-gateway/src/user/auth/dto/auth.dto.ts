import { IsEmail, IsNotEmpty, IsString, Matches, MinLength, IsOptional, IsIn } from "class-validator";

export class AuthDto {

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8, { message: 'Password must be at least 8 characters long' })
    @Matches(/[0-9]/, { message: 'Password must contain a number' })
    @Matches(/[a-z]/, { message: 'Password must contain a lowercase letter' })
    @Matches(/[A-Z]/, { message: 'Password must contain an uppercase letter' })
    @Matches(/[!@#$%^&*(),.?"':;{}|<>-_]/, { message: 'Password must contain a special character' })
    password: string;

    @IsString()
    @IsNotEmpty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    lastName: string;

    @IsString()
    @IsIn([
        'Algeria', 'Angola', 'Benin', 'Botswana', 'Burkina Faso', 'Burundi', 
        'Cabo Verde', 'Cameroon', 'Central African Republic', 'Chad', 'Comoros',
        'Congo', `Côte d'Ivoire`, 'Djibouti', 'Egypt', 'Equatorial Guinea', 'Eritrea', 
        'Eswatini', 'Ethiopia', 'Gabon', 'Gambia', 'Ghana', 'Guinea', 'Guinea-Bissau', 
        'Kenya', 'Lesotho', 'Liberia', 'Libya', 'Madagascar', 'Malawi', 'Mali', 
        'Mauritania', 'Mauritius', 'Morocco', 'Mozambique', 'Namibia', 'Niger', 'Nigeria', 
        'Rwanda', 'Sao Tome and Principe', 'Senegal', 'Seychelles', 'Sierra Leone', 'Somalia', 
        'South Africa', 'South Sudan', 'Sudan', 'Tanzania', 'Togo', 'Tunisia', 'Uganda', 
        'Zambia', 'Zimbabwe', 'Democratic Republic of the Congo'
    ], {
        message: 'Country must be an African country',
    })
    country: string;

    @IsString()
    @IsOptional()
    @Matches(/^\+?[1-9]\d{1,14}$/, {
        message: 'Phone number must be in the correct international format',
    })
    phoneNumber?: string;
}