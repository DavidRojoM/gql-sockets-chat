import { AppState } from '../interfaces/app-state.interface';
import { createSelector } from '@ngrx/store';
import { PostsState } from '../interfaces/posts-state';

const selectPostsFeature = ({ posts }: AppState) => posts;

export const selectPosts = createSelector(
  selectPostsFeature,
  ({ posts }: PostsState) => posts
);
