import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CreatePostDto, ArchiveDeletePostDto, UpdatePostDto, GetPostByTypeDto } from './dto';

@Injectable()
export class NetworkService {

    constructor(
        @Inject('NETWORK_SERVICE') private readonly networkClient: ClientProxy,
    ) {
        this.networkClient = ClientProxyFactory.create({
            transport: Transport.TCP,
            options: {
                host: 'agrisistance-network-service',
                port: Number(process.env.NETWORK_PORT) || 9093, 
            },
        });
    }


    async createPost(user_id: string, createPostDto: CreatePostDto){
        createPostDto.user_id = user_id;
        return this.networkClient.send('create-post', createPostDto);
    }

    async updatePost(user_id: string, post_id: string, updatePostDto: UpdatePostDto){
        updatePostDto.user_id = user_id;
        updatePostDto.post_id = post_id;
        return this.networkClient.send('update-post', updatePostDto);
    }

    async archivePost(user_id: string, archivePostDto: ArchiveDeletePostDto){
        archivePostDto.user_id = user_id;
        return this.networkClient.send('archive-post', archivePostDto);
    }

    async unarchivePost(user_id: string, unarchivePostDto: ArchiveDeletePostDto){
        unarchivePostDto.user_id = user_id;
        return this.networkClient.send('unarchive-post', unarchivePostDto);
    }

    async deletePost(user_id: string, deletePostDto: ArchiveDeletePostDto){
        deletePostDto.user_id = user_id;
        return this.networkClient.send('delete-post', deletePostDto);
    }


    async getMyPosts(user_id: string){
        return this.networkClient.send('get-my-posts', user_id);
    }


    async getAllPosts(user_id: string){
        return this.networkClient.send('get-all-posts', user_id);
    }


    async getPostByType(user_id: string, post_type: string){
        const getPostByTypeDto: GetPostByTypeDto = new GetPostByTypeDto();
        getPostByTypeDto.user_id = user_id;
        getPostByTypeDto.post_type = post_type;
        return this.networkClient.send('get-post-by-type', getPostByTypeDto);
    }

}
