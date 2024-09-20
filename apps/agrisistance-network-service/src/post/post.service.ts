import { HttpStatus, Injectable } from '@nestjs/common';
import { PrismaNetworkService } from '../.prisma/prisma-network.service';
import { CreatePostDto, ArchiveDeletePostDto, UpdatePostDto, GetPostByTypeDto } from './dto';
import * as cloudinary from 'cloudinary';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostService {
    constructor(
        private prisma: PrismaNetworkService,
        private cloudinaryService: CloudinaryService,
        private configService: ConfigService,
    ) {
        cloudinary.v2.config({
            cloud_name: this.configService.get("CLOUDINARY_CLOUD_NAME"),
            api_key: this.configService.get("CLOUDINARY_API_KEY"),
            api_secret: this.configService.get("CLOUDINARY_API_SECRET"),
        });
    }

    async createPost(createPostDto: CreatePostDto) {
        try {
            if (createPostDto.post_image) {
                const uploadResult = await cloudinary.v2.uploader.upload(createPostDto.post_image, {
                    folder: 'Agrisistance/Posts-Pictures',
                });
                createPostDto.post_image = uploadResult.secure_url;
            }

            const post = await this.prisma.post.create({
                data: {
                    user_id: createPostDto.user_id,
                    post_title: createPostDto.post_title,
                    post_content: createPostDto.post_content,
                    post_type: createPostDto.post_type,
                    post_image: createPostDto.post_image,
                },
            });

            return { message: 'Post created successfully', post_id: post.post_id };
        } catch (error) {
            console.error('Error creating post:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/createPost',
                message: 'Failed to create post.',
            };
        }
    }

    async updatePost(updatePostDto: UpdatePostDto) {
        try {
            const existingPost = await this.prisma.post.findUnique({
                where: { 
                    post_id: updatePostDto.post_id, 
                    user_id: updatePostDto.user_id
                 },
            });

            if (!existingPost) {
                return {
                    statusCode: HttpStatus.NOT_FOUND,
                    timestamp: new Date().toISOString(),
                    path: '/updatePost',
                    message: 'Post not found for the user.',
                };
            }

            if (updatePostDto.post_image) {
                const existingImage = await this.prisma.post.findUnique({
                    where: { post_id: updatePostDto.post_id },
                    select: { post_image: true },
                });

                if (existingImage?.post_image) {
                    const publicId = this.cloudinaryService.extractPublicId(existingImage.post_image);
                    if (publicId) {
                        await this.cloudinaryService.deleteImageFromCloudinary(publicId, 'Posts-Pictures');
                    }
                }

                const uploadResult = await cloudinary.v2.uploader.upload(updatePostDto.post_image, {
                    folder: 'Agrisistance/Posts-Pictures',
                });
                updatePostDto.post_image = uploadResult.secure_url;
            }

            await this.prisma.post.update({
                where: { post_id: updatePostDto.post_id },
                data: {
                    post_title: updatePostDto.post_title,
                    post_content: updatePostDto.post_content,
                    post_type: updatePostDto.post_type,
                    post_image: updatePostDto.post_image,
                },
            });

            return { message: 'Post updated successfully' };
        } catch (error) {
            console.error('Error updating post:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/updatePost',
                message: 'Failed to update post.',
            };
        }
    }

    async archivePost(archivePostDto: ArchiveDeletePostDto) {
        try {
            const existingPost = await this.prisma.post.findUnique({
                where: { 
                    post_id: archivePostDto.post_id,
                    user_id: archivePostDto.user_id,
                 },
            });

            if (!existingPost) {
                return {
                    statusCode: HttpStatus.NOT_FOUND,
                    timestamp: new Date().toISOString(),
                    path: '/archivePost',
                    message: 'Post not found for the user.',
                };
            }

            await this.prisma.post.update({
                where: { post_id: archivePostDto.post_id },
                data: { is_active: false },
            });

            return { message: 'Post archived successfully' };
        } catch (error) {
            console.error('Error archiving post:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/archivePost',
                message: 'Failed to archive post.',
            };
        }
    }

    async unarchivePost(unarchivePostDto: ArchiveDeletePostDto) {
        try {
            const existingPost = await this.prisma.post.findUnique({
                where: { 
                    post_id: unarchivePostDto.post_id,
                    user_id: unarchivePostDto.user_id, 
                },
            });

            if (!existingPost) {
                return {
                    statusCode: HttpStatus.NOT_FOUND,
                    timestamp: new Date().toISOString(),
                    path: '/archivePost',
                    message: 'Post not found for the user.',
                };
            }

            await this.prisma.post.update({
                where: { post_id: unarchivePostDto.post_id },
                data: { is_active: true },
            });

            return { message: 'Post unarchived successfully' };
        } catch (error) {
            console.error('Error archiving post:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/archivePost',
                message: 'Failed to unarchive post.',
            };
        }
    }

    async deletePost(deletePostDto: ArchiveDeletePostDto) {
        try {
            const existingPost = await this.prisma.post.findUnique({
                where: { 
                    post_id: deletePostDto.post_id,
                    user_id: deletePostDto.user_id,
                },
            });

            if (!existingPost) {
                return {
                    statusCode: HttpStatus.NOT_FOUND,
                    timestamp: new Date().toISOString(),
                    path: '/deletePost',
                    message: 'Post not found for the user.',
                };
            }

            const existingImage = await this.prisma.post.findUnique({
                where: { post_id: deletePostDto.post_id },
                select: { post_image: true },
            });

            if (existingImage?.post_image) {
                const publicId = this.cloudinaryService.extractPublicId(existingImage.post_image);
                if (publicId) {
                    await this.cloudinaryService.deleteImageFromCloudinary(publicId, 'Posts-Pictures');
                }
            }

            await this.prisma.post.delete({
                where: { post_id: deletePostDto.post_id },
            });

            return { message: 'Post deleted successfully' };
        } catch (error) {
            console.error('Error deleting post:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/deletePost',
                message: 'Failed to delete post.',
            };
        }
    }

    

    async getMyPosts(user_id: string) {
        try {
            const myPosts = await this.prisma.post.findMany({
                where: { user_id: user_id },
                include: {
                    user: {
                        select: {
                            user_id: true,
                            first_name: true,
                            last_name: true,
                            country: true,
                            phone_number: true,
                            profile_picture: true,
                        },
                    },
                },
            });
            return myPosts;
        } catch (error) {
            console.error('Error fetching my posts:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/getMyPosts',
                message: 'Failed to fetch posts.',
            };
        }
    }

    async getAllPosts(user_id: string) {
        try {
            
            // This functionality insure that the user doesn't get the post already saw but we'll comment this part for now since there is not many posts and users in the databases
            // const seenPosts = await this.prisma.user_Seen_Post.findMany({
            //     where: { user_id: user_id },
            //     select: { post_id: true },
            // });

            // const seenPostIds = seenPosts.map((seenPost) => seenPost.post_id);

            const posts = await this.prisma.post.findMany({
                // where: { post_id: { notIn: seenPostIds } , is_active: true },
                // take: 30,
                include: {
                    user: {
                        select: {
                            user_id: true,
                            first_name: true,
                            last_name: true,
                            country: true,
                            phone_number: true,
                            profile_picture: true,
                        },
                    },
                },
            });

            const userSeenPosts = posts.map((post) => ({ user_id: user_id, post_id: post.post_id }));


            //await this.prisma.user_Seen_Post.createMany({ data: userSeenPosts });

            return posts;
        } catch (error) {
            console.error('Error fetching all posts:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/getAllPosts',
                message: 'Failed to fetch all posts.',
            };
        }
    }

    async getPostByType(getPostByTypeDto: GetPostByTypeDto) {
        try {
            
            // This functionality insure that the user doesn't get the post already saw but we'll comment this part for now since there is not many posts and users in the databases
            const { user_id, post_type } = getPostByTypeDto;

            // const seenPosts = await this.prisma.user_Seen_Post.findMany({
            //     where: { user_id: user_id, post: { post_type: post_type } },
            //     select: { post_id: true },
            // });

            // const seenPostIds = seenPosts.map((seenPost) => seenPost.post_id);

            const posts = await this.prisma.post.findMany({
                // where: { post_type: post_type, post_id: { notIn: seenPostIds } , is_active: true },
                // take: 30,
                include: {
                    user: {
                        select: {
                            user_id: true,
                            first_name: true,
                            last_name: true,
                            country: true,
                            phone_number: true,
                            profile_picture: true,
                        },
                    },
                },
            });

            const userSeenPosts = posts.map((post) => ({ user_id: user_id, post_id: post.post_id }));


            //await this.prisma.user_Seen_Post.createMany({ data: userSeenPosts });

            return posts;
        } catch (error) {
            console.error('Error fetching posts by type:', error);
            return {
                statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
                timestamp: new Date().toISOString(),
                path: '/get-post-by-type',
                message: 'An error occurred while fetching posts by type.',
            };
        }
    }
}
