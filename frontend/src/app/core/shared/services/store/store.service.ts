import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state/interfaces/app-state.interface';
import { PostDto } from '../../../domain/dto/post.dto';
import { actions } from '../../../../state/actions/posts.actions';
import { selectPosts } from '../../../../state/selectors/posts.selector';
import { v4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private readonly store$: Store<AppState>) {}

  public loadPosts() {
    this.store$.dispatch(actions.loadPostsRequest());
  }

  public createPost(post: PostDto) {
    post.id = v4();
    this.store$.dispatch(actions.createPostRequest({ post }));
  }

  public loadPost(post: PostDto) {
    this.store$.dispatch(actions.loadPostSuccess({ post }));
  }

  public selectPosts() {
    return this.store$.select(selectPosts);
  }
}
