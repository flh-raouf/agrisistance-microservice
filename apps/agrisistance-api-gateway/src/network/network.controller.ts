import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import { JwtGuard } from "../.guard/jwt.guard";
import { JwtDecorator } from "../.decorator";
import { NetworkService } from "./network.service";
import { ArchiveDeletePostDto, CreatePostDto, UpdatePostDto, GetPostByTypeDto } from "./dto";

@Controller('network')
@UseGuards(JwtGuard)
export class NetworkController {

    constructor(private networkService: NetworkService) {}

    @Post('create-post')
    @HttpCode(HttpStatus.CREATED)
    async createPost(
        @Body() createpostDto: CreatePostDto,
        @JwtDecorator('user_id') user_id: string,
    ){
        return this.networkService.createPost(user_id, createpostDto);
    }


    @Post('update-post')
    @HttpCode(HttpStatus.OK)
    async updatePost(
        @Body() updatePostDto: UpdatePostDto,
        @JwtDecorator('user_id') user_id: string,
    ){
        return this.networkService.updatePost(user_id, updatePostDto);
    }



    @Put('archive-post')
    @HttpCode(HttpStatus.OK)
    async archivePost(
        @Body() archivePostDto: ArchiveDeletePostDto,
        @JwtDecorator('user_id') user_id: string,
    ){
        return this.networkService.archivePost(user_id, archivePostDto);
    }


    @Put('delete-post')
    @HttpCode(HttpStatus.OK)
    async deletePost(
        @Body() deletePostDto: ArchiveDeletePostDto,
        @JwtDecorator('user_id') user_id: string,
    ){
        return this.networkService.deletePost(user_id, deletePostDto);
    }


    @Get('get-my-posts')
    @HttpCode(HttpStatus.OK)
    async getMyPosts(
        @JwtDecorator('user_id') user_id: string,
    ){
        return this.networkService.getMyPosts(user_id);
    }


    @Get('get-all-posts')
    @HttpCode(HttpStatus.OK)
    async getAllPosts(
        @JwtDecorator('user_id') user_id: string,
    ){
        return this.networkService.getAllPosts(user_id);
    }


    @Get('get-post-by-type/:post_type')
    @HttpCode(HttpStatus.OK)
    async getPostByType(
        @Param('post_type') post_type: string,
        @JwtDecorator('user_id') user_id: string,
    ){
        return this.networkService.getPostByType(user_id, post_type);
    }


}
