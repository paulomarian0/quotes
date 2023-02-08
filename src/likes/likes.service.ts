import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateLikeDto } from './dto/create-like.dto';
import { UpdateLikeDto } from './dto/update-like.dto';

@Injectable()
export class LikesService {

  constructor(private prisma: PrismaService) { }

  async create(createLikeDto: CreateLikeDto) {
    return 'This action adds a new like';
  }

  async findAll() {

    const payload = 3

    return payload;
  }

  async findOne(id: number) {
    return `This action returns a #${id} like`;
  }

  async update(id: number, updateLikeDto: UpdateLikeDto) {
    return `This action updates a #${id} like`;
  }

  async remove(id: number) {
    return `This action removes a #${id} like`;
  }
}
