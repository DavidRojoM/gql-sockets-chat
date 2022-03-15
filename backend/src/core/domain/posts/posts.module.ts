import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsResolver } from './posts.resolver';
import { PostsRepository } from './posts.repository';

@Module({
  providers: [PostsResolver, PostsService, PostsRepository],
})
export class PostsModule {}
