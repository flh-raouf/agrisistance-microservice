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


    async createPost(createPostDto: CreatePostDto ) {

        // make logic to insert post image
        if (createPostDto.post_image){
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
    }


    async updatePost(updatePostDto: UpdatePostDto) {

        // test if the post belongs to the user
        const existingPost = await this.prisma.post.findUnique({
            where: {
                post_id: updatePostDto.post_id,
            },
        });

        if (!existingPost) {
            throw new HttpException ({
                status: HttpStatus.NOT_FOUND,
                error: 'Land not found for the user.',
            }, HttpStatus.NOT_FOUND);
        }

        if (updatePostDto.post_image){
          
            const existingImage = await this.prisma.post.findUnique({
                where: {
                    post_id: updatePostDto.post_id,
                },
                select: {
                    post_image: true,
                },
            });
              // delete the existing image from Cloudinary
            if (existingImage?.post_image) {
              const publicId = this.cloudinaryService.extractPublicId(existingImage.post_image);
              if (publicId) {
                await this.cloudinaryService.deleteImageFromCloudinary(publicId, 'Posts-Pictures');
              }
            }
            // Upload the new image to Cloudinary
            const uploadResult = await cloudinary.v2.uploader.upload(updatePostDto.post_image, {
                folder: 'Agrisistance/Posts-Pictures',
            });
            updatePostDto.post_image = uploadResult.secure_url;
        }

        await this.prisma.post.update({
            where: {
                post_id: updatePostDto.post_id,
            },
            data: {
                post_title: updatePostDto.post_title,
                post_content: updatePostDto.post_content,
                post_type: updatePostDto.post_type,
                post_image: updatePostDto.post_image,
            },
        });

        return { message: 'Post updated successfully' };
    }


    async archivePost(archivePostDto: ArchiveDeletePostDto) {

        // test if the post belongs to the user
        const existingPost = await this.prisma.post.findUnique({
            where: {
                post_id: archivePostDto.post_id,
            },
        });

        if (!existingPost) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Land not found for the user.',
            }, HttpStatus.NOT_FOUND);
        }

        await this.prisma.post.update({
            where: {
                post_id: archivePostDto.post_id,
            },
            data: {
                is_active: false,
            },
        });

        return { message: 'Post archived successfully' };
    }


    async deletePost(deletePostDto: ArchiveDeletePostDto) {

        // test if the post belongs to the user
        const existingPost = await this.prisma.post.findUnique({
            where: {
                post_id: deletePostDto.post_id,
            },
        });

        if (!existingPost) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Land not found for the user.',
            }, HttpStatus.NOT_FOUND);
        }

        const existingImage = await this.prisma.post.findUnique({
            where: {
                post_id: deletePostDto.post_id,
            },
            select: {
                post_image: true,
            },
        });

        if (existingImage?.post_image) {
            const publicId = this.cloudinaryService.extractPublicId(existingImage.post_image);
            if (publicId) {
                await this.cloudinaryService.deleteImageFromCloudinary(publicId, 'Posts-Pictures');
            }
        }

        await this.prisma.post.delete({
            where: {
                post_id: deletePostDto.post_id,
            },
        });

        return { message: 'Post deleted successfully' };
    }


    async getMyPosts(user_id: string) {
        // Fetch the user's posts along with user information
        const myPosts = await this.prisma.post.findMany({
            where: {
                user_id: user_id,
            },
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
    }
    


    async getAllPosts(user_id: string) {
        // Fetch all posts seen by the user
        const seenPosts = await this.prisma.user_Seen_Post.findMany({
            where: {
                user_id: user_id,
            },
            select: {
                post_id: true,
            },
        });
    
        // Extract the post IDs that have already been seen by the user
        const seenPostIds = seenPosts.map((seenPost) => seenPost.post_id);
    
        // Fetch the next 30 unseen posts along with user information
        const posts = await this.prisma.post.findMany({
            where: {
                post_id: {
                    notIn: seenPostIds, // Exclude posts that have been seen
                },
            },
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
    
        // Insert these posts into the user_seen_post table
        const userSeenPosts = posts.map((post) => {
            return {
                user_id: user_id,
                post_id: post.post_id,
            };
        });
    
        await this.prisma.user_Seen_Post.createMany({
            data: userSeenPosts,
        });
    
        // Return the fetched posts
        return posts;
    }
    
    
    async getPostByType(getPostByTypeDto: GetPostByTypeDto) {
        const { user_id, post_type } = getPostByTypeDto;
    
        // Fetch all seen posts of the specified type by the user
        const seenPosts = await this.prisma.user_Seen_Post.findMany({
            where: {
                user_id: user_id,
                post: {
                    post_type: post_type, // Ensure filtering by post type
                },
            },
            select: {
                post_id: true,
            },
        });
    
        // Extract the post IDs that have already been seen by the user
        const seenPostIds = seenPosts.map((seenPost) => seenPost.post_id);
    
        // Fetch the next 30 unseen posts of the specified type along with user information
        const posts = await this.prisma.post.findMany({
            where: {
                post_type: post_type,
                post_id: {
                    notIn: seenPostIds, // Exclude the posts that have been seen
                },
            },
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
    
        // Insert these posts into the user_seen_post table
        const userSeenPosts = posts.map((post) => {
            return {
                user_id: user_id,
                post_id: post.post_id,
            };
        });
    
        await this.prisma.user_Seen_Post.createMany({
            data: userSeenPosts,
        });
    
        // Return the fetched posts
        return posts;
    }
    
}
