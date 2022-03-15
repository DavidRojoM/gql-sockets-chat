import { PostsState } from '../interfaces/posts-state';
import { createReducer, on } from '@ngrx/store';
import { actions } from '../actions/posts.actions';

const initialState: PostsState = {
  loading: false,
  posts: [],
};

export const postsReducer = createReducer(
  initialState,
  on(actions.loadPostsRequest, (state) => ({
    ...state,
    loading: true,
  })),
  on(actions.loadPostsSuccess, (state, { posts }) => ({
    ...state,
    loading: false,
    posts,
  })),

  on(actions.loadPostSuccess, (state, { post }) => ({
    posts: [...state.posts, post],
    loading: false,
  }))
);
