import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { QueryParamsLikeDto } from './dto/query-params-likes.dto';

@Injectable()
export class LikesService {

  constructor(private prisma: PrismaService) { }

  async create(data: CreateLikeDto) {

    const payload = await this.prisma.likes.create({
      data,
    })

    return payload;
  }

  async findAll() {
    const payload = await this.prisma.likes.findMany({
      select: {
        id: true,
        liked: true,
        User: true,
        Post: true
      }
    })

    return payload;
  }

  async remove(params: QueryParamsLikeDto) {
    const authorName = params.authorName
    const postId = +params.postId

    const payload = await this.prisma.likes.deleteMany({
      where: {
        authorName,
        postId
      }
    })

    return payload;
  }
}
