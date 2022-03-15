import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './interfaces/app-state.interface';
import { postsReducer } from './reducers/posts.reducer';

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  posts: postsReducer,
};
