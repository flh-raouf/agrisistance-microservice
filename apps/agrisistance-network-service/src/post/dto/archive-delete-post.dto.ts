import { IsNotEmpty, IsString } from "class-validator";

export class ArchiveDeletePostDto {
    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsString()
    @IsNotEmpty()
    post_id: string;
}