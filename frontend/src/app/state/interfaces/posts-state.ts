import { PostDto } from '../../core/domain/dto/post.dto';

export interface PostsState {
  loading: boolean;
  posts: ReadonlyArray<PostDto>;
  error?: any;
}
