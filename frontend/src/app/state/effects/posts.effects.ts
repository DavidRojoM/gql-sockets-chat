import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PostsService } from '../../core/shared/services/posts/posts.service';
import { exhaustMap, map, switchMap } from 'rxjs/operators';
import { ActionTypes } from '../actions/action.types.enum';
import { PostsGqlRepository } from '../../core/shared/services/posts/gql-repository/posts-gql.repository';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private postsService: PostsService,
    private postsRepository: PostsGqlRepository
  ) {}

  loadPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.LOAD_POSTS_REQUEST),
      switchMap(() =>
        this.postsRepository.findAll().pipe(
          map((posts) => ({
            type: ActionTypes.LOAD_POSTS_SUCCESS,
            posts,
          }))
        )
      )
    )
  );

  addPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ActionTypes.CREATE_POST_REQUEST),
      exhaustMap(({ post }) => this.postsRepository.addOne(post))
    )
  );
}
