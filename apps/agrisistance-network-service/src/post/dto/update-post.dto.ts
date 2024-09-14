import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdatePostDto {
    @IsString()
    @IsNotEmpty()
    post_id: string;

    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsString()
    @IsOptional()
    post_title?: string;

    @IsString()
    @IsOptional()
    post_content?: string;

    @IsString()
    @IsOptional()
    post_image?: string;

    @IsString()
    @IsOptional()
    @IsIn(['opportunitiesAndPartnership', 'businessPromotion', 'resourcesAndProducts' ])
    post_type?: string;
}