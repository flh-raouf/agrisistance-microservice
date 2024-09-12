import { IsNotEmpty, IsString } from "class-validator";

export class GetPostByTypeDto {

    @IsString()
    @IsNotEmpty()
    user_id: string;

    @IsString()
    @IsNotEmpty()
    post_type: string;


}
