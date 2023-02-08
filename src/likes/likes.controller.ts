import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { QueryParamsLikeDto } from './dto/query-params-likes.dto';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  create(@Body() createLikeDto: CreateLikeDto) {
    return this.likesService.create(createLikeDto);
  }

  @Get()
  findAll(){
    return this.likesService.findAll();
  }

  @Delete()
  remove(@Query() params: QueryParamsLikeDto) {
    return this.likesService.remove(params);
  }
}
