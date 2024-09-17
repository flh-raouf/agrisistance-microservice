import { Controller } from '@nestjs/common';
import { PostService } from './post.service';
import { EventPattern } from '@nestjs/microservices';
import { CreatePostDto, ArchiveDeletePostDto, UpdatePostDto, GetPostByTypeDto } from './dto';

@Controller('post')
export class PostController {

    constructor(private postService: PostService) {}

    @EventPattern('create-post')
    async createPost(createPostDto: CreatePostDto) {
        return await this.postService.createPost(createPostDto);
    }

    @EventPattern('update-post')
    async updatePost(updatePostDto: UpdatePostDto) {
        return await this.postService.updatePost(updatePostDto);
    }

    @EventPattern('archive-post')
    async archivePost(archivePostDto: ArchiveDeletePostDto) {
        return await this.postService.archivePost(archivePostDto);
    }

    @EventPattern('unarchive-post')
    async unarchivePost(unarchivePostDto: ArchiveDeletePostDto) {
        return await this.postService.unarchivePost(unarchivePostDto);
    }

    @EventPattern('delete-post')
    async deletePost(deletePostDto: ArchiveDeletePostDto) {
        return await this.postService.deletePost(deletePostDto);
    }

    @EventPattern('get-my-posts')
    async getMyPosts(user_id: string) {
        return await this.postService.getMyPosts(user_id);
    }

    @EventPattern('get-all-posts')
    async getAllPosts(user_id: string) {
        return await this.postService.getAllPosts(user_id);
    }

    @EventPattern('get-post-by-type')
    async getPostById(getPostByTypeDto: GetPostByTypeDto) {
        return await this.postService.getPostByType(getPostByTypeDto);
    }

}
