import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
            // Handle post image upload to Cloudinary
            if (createPostDto.post_image) {
                const uploadResult = await cloudinary.v2.uploader.upload(createPostDto.post_image, {
                    folder: 'Agrisistance/Posts-Pictures',
                });
                createPostDto.post_image = uploadResult.secure_url;
            }

            await this.prisma.post.create({
                data: {
                    user_id: createPostDto.user_id,
                    post_title: createPostDto.post_title,
                    post_content: createPostDto.post_content,
                    post_type: createPostDto.post_type,
                    post_image: createPostDto.post_image,
                }
            });

            return { message: 'Post created successfully' };
        } catch (error) {
            console.error('Error creating post:', error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while creating the post.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updatePost(updatePostDto: UpdatePostDto) {
        try {
            const existingPost = await this.prisma.post.findUnique({
                where: { post_id: updatePostDto.post_id },
            });

            if (!existingPost) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Post not found for the user.',
                }, HttpStatus.NOT_FOUND);
            }

            if (updatePostDto.post_image) {
                // Handle existing image deletion
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

                // Upload the new image
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
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while updating the post.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async archivePost(archivePostDto: ArchiveDeletePostDto) {
        try {
            const existingPost = await this.prisma.post.findUnique({
                where: { post_id: archivePostDto.post_id },
            });

            if (!existingPost) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Post not found for the user.',
                }, HttpStatus.NOT_FOUND);
            }

            await this.prisma.post.update({
                where: { post_id: archivePostDto.post_id },
                data: { is_active: false },
            });

            return { message: 'Post archived successfully' };
        } catch (error) {
            console.error('Error archiving post:', error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while archiving the post.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async deletePost(deletePostDto: ArchiveDeletePostDto) {
        try {
            const existingPost = await this.prisma.post.findUnique({
                where: { post_id: deletePostDto.post_id },
            });

            if (!existingPost) {
                throw new HttpException({
                    status: HttpStatus.NOT_FOUND,
                    error: 'Post not found for the user.',
                }, HttpStatus.NOT_FOUND);
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
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while deleting the post.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
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
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while fetching the posts.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getAllPosts(user_id: string) {
        try {
            const seenPosts = await this.prisma.user_Seen_Post.findMany({
                where: { user_id: user_id },
                select: { post_id: true },
            });

            const seenPostIds = seenPosts.map((seenPost) => seenPost.post_id);

            const posts = await this.prisma.post.findMany({
                where: { post_id: { notIn: seenPostIds } },
                take: 30,
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

            await this.prisma.user_Seen_Post.createMany({ data: userSeenPosts });

            return posts;
        } catch (error) {
            console.error('Error fetching all posts:', error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while fetching all posts.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getPostByType(getPostByTypeDto: GetPostByTypeDto) {
        try {
            const { user_id, post_type } = getPostByTypeDto;

            const seenPosts = await this.prisma.user_Seen_Post.findMany({
                where: { user_id: user_id, post: { post_type: post_type } },
                select: { post_id: true },
            });

            const seenPostIds = seenPosts.map((seenPost) => seenPost.post_id);

            const posts = await this.prisma.post.findMany({
                where: { post_type: post_type, post_id: { notIn: seenPostIds } },
                take: 30,
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

            await this.prisma.user_Seen_Post.createMany({ data: userSeenPosts });

            return posts;
        } catch (error) {
            console.error('Error fetching posts by type:', error);
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: 'An error occurred while fetching posts by type.',
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
