import { createAction, props } from '@ngrx/store';
import { ActionTypes } from './action.types.enum';
import { PostDto } from '../../core/domain/dto/post.dto';

export const actions = {
  loadPostsRequest: createAction(ActionTypes.LOAD_POSTS_REQUEST),
  loadPostsSuccess: createAction(
    ActionTypes.LOAD_POSTS_SUCCESS,
    props<{ posts: PostDto[] }>()
  ),
  // loadPostsFailure: createAction(ActionTypes.LOAD_POSTS_FAILURE),

  // loadPostRequest: createAction(ActionTypes.LOAD_POST_REQUEST),
  loadPostSuccess: createAction(
    ActionTypes.LOAD_POST_SUCCESS,
    props<{ post: PostDto }>()
  ),
  // loadPostFailure: createAction(ActionTypes.LOAD_POST_FAILURE),

  createPostRequest: createAction(
    ActionTypes.CREATE_POST_REQUEST,
    props<{ post: PostDto }>()
  ),
  // createPostSuccess: createAction(ActionTypes.CREATE_POST_SUCCESS),
  // createPostFailure: createAction(ActionTypes.CREATE_POST_FAILURE),
};
