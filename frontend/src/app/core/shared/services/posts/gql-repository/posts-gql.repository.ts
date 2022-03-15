import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { findAllQuery } from './queries/find-all.query';
import { map } from 'rxjs/operators';
import { PostDto } from '../../../../domain/dto/post.dto';
import { Observable } from 'rxjs';
import { createPostMutation } from './mutations/create-post.mutation';
import { PostAddedSubscription } from './subscriptions/post-added.subscription';

@Injectable({
  providedIn: 'root',
})
export class PostsGqlRepository {
  constructor(private readonly apollo: Apollo) {}

  public findAll(): Observable<PostDto[]> {
    return this.apollo
      .query({
        query: findAllQuery,
      })
      .pipe(map(({ data }: any) => data.findAll));
  }

  public addOne(post: PostDto) {
    return this.apollo
      .mutate({
        mutation: createPostMutation,
        variables: {
          postInput: { ...post },
        },
      })
      .pipe(map(({ data }: any) => data.createPost));
  }

  public postAdded() {
    return this.apollo
      .subscribe({
        query: PostAddedSubscription,
      })
      .pipe(map(({ data }: any) => data.postAdded));
  }
}
