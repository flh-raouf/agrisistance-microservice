import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreatePostDto {
    
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
    post_type: string;
}