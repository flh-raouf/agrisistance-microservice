import { Injectable } from '@nestjs/common';
import { CreatePostDto, ArchiveDeletePostDto, UpdatePostDto, GetPostByTypeDto } from './dto';

@Injectable()
export class PostService {

    private readonly serviceUrl = 'https://agrisistance-network-service.up.railway.app/post';

    // Create Post
    async createPost(user_id: string, createPostDto: CreatePostDto) {
        createPostDto.user_id = user_id;
        const response = await fetch(`${this.serviceUrl}/create-post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(createPostDto)
        });
        const data = await response.json();
        return data;
    }

    // Update Post
    async updatePost(user_id: string, post_id: string, updatePostDto: UpdatePostDto) {
        updatePostDto.user_id = user_id;
        updatePostDto.post_id = post_id;
        const response = await fetch(`${this.serviceUrl}/update-post`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatePostDto)
        });
        const data = await response.json();
        return data;
    }

    // Archive Post
    async archivePost(user_id: string, archivePostDto: ArchiveDeletePostDto) {
        archivePostDto.user_id = user_id;
        const response = await fetch(`${this.serviceUrl}/archive-post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(archivePostDto)
        });
        const data = await response.json();
        return data;
    }

    // Unarchive Post
    async unarchivePost(user_id: string, unarchivePostDto: ArchiveDeletePostDto) {
        unarchivePostDto.user_id = user_id;
        const response = await fetch(`${this.serviceUrl}/unarchive-post`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(unarchivePostDto)
        });
        const data = await response.json();
        return data;
    }

    // Delete Post
    async deletePost(user_id: string, deletePostDto: ArchiveDeletePostDto) {
        deletePostDto.user_id = user_id;
        const response = await fetch(`${this.serviceUrl}/delete-post`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(deletePostDto)
        });
        const data = await response.json();
        return data;
    }

    // Get My Posts
    async getMyPosts(user_id: string) {
        const response = await fetch(`${this.serviceUrl}/get-my-posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id })
        });
        const data = await response.json();
        return data;
    }

    // Get All Posts
    async getAllPosts(user_id: string) {
        const response = await fetch(`${this.serviceUrl}/get-all-posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_id })
        });
        const data = await response.json();
        return data;
    }

    // Get Post By Type
    async getPostByType(user_id: string, post_type: string) {
        const getPostByTypeDto: GetPostByTypeDto = { user_id, post_type };
        const response = await fetch(`${this.serviceUrl}/get-post-by-type`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(getPostByTypeDto)
        });
        const data = await response.json();
        return data;
    }
}
