import { Injectable } from '@angular/core';
import { PostsGqlRepository } from './gql-repository/posts-gql.repository';
import { PostDto } from '../../../domain/dto/post.dto';
import { v4 } from 'uuid';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(
    private readonly postsRepository: PostsGqlRepository,
    private readonly storeService: StoreService
  ) {
    this.postAdded();
  }

  public loadPosts() {
    this.storeService.loadPosts();
  }

  public findAll() {
    return this.storeService.selectPosts();
  }

  public createOne(post: PostDto) {
    post.id = v4();
    return this.postsRepository.addOne(post);
  }

  private postAdded() {
    this.postsRepository.postAdded().subscribe((post) => {
      this.storeService.loadPost(post);
    });
  }
}
