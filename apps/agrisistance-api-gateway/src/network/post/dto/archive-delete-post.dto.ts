import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class ArchiveDeletePostDto {
    @IsString()
    @IsOptional()
    user_id?: string;

    @IsString()
    @IsNotEmpty()
    post_id: string;
}