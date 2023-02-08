import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll(@Query() params: any) {
    return this.postsService.findAll(params);
  }
 
  @Patch()
  update(@Query() params: any, @Body() data: UpdatePostDto) {
    return this.postsService.update(params, data);
  }

  @Delete()
  remove(@Query() params: any ) {
    return this.postsService.remove(params);
  }
}
