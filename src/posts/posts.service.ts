import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { QueryParamsPostDto } from './dto/query-params-posts.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {

  constructor(private prisma: PrismaService) { }

  async create(data: CreatePostDto) {

    const payload = await this.prisma.post.create({
      data,
    })

    return payload;
  }

  async findAll(params: QueryParamsPostDto) {

    if (params.id)
      params.id = +params.id

    const payload = await this.prisma.post.findMany({
      where: params,
      include: {
        author: true,
        likeCount: true
      }
    })

    return payload;
  }

  async update(params: QueryParamsPostDto, data: UpdatePostDto) {

    const id = +params.id

    const payload = await this.prisma.post.update({
      data,
      where: { id }
    })

    return payload;
  }

  async remove(params: QueryParamsPostDto) {

    const id = +params.id

    const removeAllLikesFromThisPost = await this.prisma.likes.deleteMany({
      where: {postId: id}
    })

    const payload = await this.prisma.post.delete({
      where: { id }
    
    })

    return payload;
  }
}
