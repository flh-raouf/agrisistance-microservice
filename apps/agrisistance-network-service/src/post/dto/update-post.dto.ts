import { IsIn, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class UpdatePostDto {
    @IsString()
    @IsNotEmpty()
    post_id: string;

    @IsString()
    @IsNotEmpty()
    user_id: string;

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