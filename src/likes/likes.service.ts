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
      include: {
        User: true,
        Post: true
      }
    })

    return payload;
  }

  async remove(params: QueryParamsLikeDto) {

    const id = params.id

    const payload = await this.prisma.likes.delete({
      where: { id }
    })

    return payload;
  }
}
