import { Controller, Post, Get, Put, Delete, Body, Query } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto, ArchiveDeletePostDto, UpdatePostDto, GetPostByTypeDto } from './dto';

@Controller('post')
export class PostController {

    constructor(private readonly PostService: PostService) {}

    @Post('create-post')
    async createPost(
        @Body() createPostDto: CreatePostDto,
    ) {
        return await this.PostService.createPost(createPostDto);
    }

    @Put('update-post')
    async updatePost(
        @Body() updatePostDto: UpdatePostDto,

    ) {
        return await this.PostService.updatePost(updatePostDto);
    }

    @Post('archive-post')
    async archivePost(
        @Body() archivePostDto: ArchiveDeletePostDto,
    ) {
        return await this.PostService.archivePost(archivePostDto);
    }

    @Post('unarchive-post')
    async unarchivePost(
        @Body() unarchivePostDto: ArchiveDeletePostDto,
    ) {
        return await this.PostService.unarchivePost(unarchivePostDto);
    }

    @Delete('delete-post')
    async deletePost(
        @Body() deletePostDto: ArchiveDeletePostDto,
    ) {
        return await this.PostService.deletePost(deletePostDto);
    }

    @Post('get-my-posts')
    async getMyPosts(
        @Body('user_id') user_id: string
    ) {
        return await this.PostService.getMyPosts(user_id);
    }

    @Post('get-all-posts')
    async getAllPosts(
        @Body('user_id') user_id: string
    ) {
        return await this.PostService.getAllPosts(user_id);
    }

    @Post('get-post-by-type')
    async getPostByType(
        @Body() getPostByTypeDto: GetPostByTypeDto
    ) {
        return await this.PostService.getPostByType(getPostByTypeDto);
    }
}
