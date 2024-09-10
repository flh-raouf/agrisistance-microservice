import { IsIn, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";

export class ProfileDto {

    @IsString()
    @IsOptional()
    user_id?: string;

    @IsString()
    @IsOptional()
    first_name?: string;

    @IsString()
    @IsOptional()
    last_name?: string;

    @IsString()
    @IsOptional()
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
    country?: string;

    @IsString()
    @IsOptional()
    @Matches(/^\+?[1-9]\d{1,14}$/, {
        message: 'Phone number must be in the correct international format',
    })
    phone_number?: string;

    @IsString()
    @IsOptional()
    @Matches(/^data:image\/(jpeg|png|gif|bmp|webp);base64,[A-Za-z0-9+/=]+$/, {
        message: 'Invalid profile picture format',
    })
    profile_picture?: string;
}