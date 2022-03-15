import { Injectable } from '@nestjs/common';
import { PostInput } from './dto/post.input';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  findAll() {
    return this.postsRepository.findAll();
  }

  create(post: PostInput) {
    return this.postsRepository.addOne(post);
  }

  // findOne(id: string) {
  //   return `This action returns a #${id} post`;
  // }
  //
  // update(id: string, postInput: PostInput) {
  //   return `This action updates a #${id} post`;
  // }
  //
  // remove(id: string) {
  //   return `This action removes a #${id} post`;
  // }
}
