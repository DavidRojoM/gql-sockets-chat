import { Injectable } from '@nestjs/common';
import { Post } from './entities/post.entity';
import { PostInput } from './dto/post.input';

@Injectable()
export class PostsRepository {
  public posts: Post[] = [];

  public findAll() {
    return [...this.posts];
  }

  public addOne(post: PostInput) {
    this.posts = [...this.posts, post];
    return post;
  }
}
