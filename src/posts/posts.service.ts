import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {

  constructor (private prisma:PrismaService){}

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  async findAll() {

    const payload = await this.prisma.post.findMany({
      include:{
        author: true,
        likeCount: true
      }
    })

    return payload;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
