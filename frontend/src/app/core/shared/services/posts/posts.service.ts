import { Injectable } from '@angular/core';
import { PostsGqlRepository } from './gql-repository/posts-gql.repository';
import { PostDto } from '../../../domain/dto/post.dto';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private readonly postsRepository: PostsGqlRepository) {
    this.postAdded();
  }

  public findAll() {
    return this.postsRepository.findAll();
  }

  public createOne(post: PostDto) {
    post.id = v4();

    return this.postsRepository.addOne(post).subscribe((data) => {
      console.log(data);
    });
  }

  public postAdded() {
    this.postsRepository.postAdded().subscribe((data) => {
      console.log('subs', data);
    });
  }
}
