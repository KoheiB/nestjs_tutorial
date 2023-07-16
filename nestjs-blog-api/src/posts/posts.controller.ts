import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './posts.interface';
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  create(@Body() post: PostType): void {
    return this.postsService.create(post);
  }
}
