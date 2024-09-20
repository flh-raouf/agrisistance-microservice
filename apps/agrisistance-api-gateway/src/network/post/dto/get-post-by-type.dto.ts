import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class GetPostByTypeDto {

    @IsString()
    @IsOptional()
    user_id?: string;

    @IsString()
    @IsNotEmpty()
    post_type: string;


}
