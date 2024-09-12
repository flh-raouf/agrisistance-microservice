import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePostDto {
    @IsString()
    @IsOptional()
    user_id?: string;

    @IsString()
    @IsNotEmpty()
    post_title: string;

    @IsString()
    @IsNotEmpty()
    post_content: string;

    @IsString()
    @IsOptional()
    post_image?: string;

    @IsString()
    @IsNotEmpty()
    @IsIn(['opportunitiesAndPartnership', 'businessPromotion', 'resourcesAndProducts' ])
    post_type: string;
}