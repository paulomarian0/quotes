import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { LikesModule } from './likes/likes.module';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [UsersModule, PostsModule, LikesModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
