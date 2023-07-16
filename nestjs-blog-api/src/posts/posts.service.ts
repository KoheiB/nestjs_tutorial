import { Injectable } from '@nestjs/common';
import { PostType } from './posts.interface';
@Injectable()
export class PostsService {
  private readonly posts: PostType[] = [];
  findAll(): PostType[] {
    return this.posts;
  }
}
