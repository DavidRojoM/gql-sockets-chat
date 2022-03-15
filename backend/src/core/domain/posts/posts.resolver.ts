import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
import { PostInput } from './dto/post.input';
import { PubSub } from 'graphql-subscriptions';

@Resolver((of) => Post)
export class PostsResolver {
  private readonly pubSub = new PubSub();
  constructor(private readonly postsService: PostsService) {}

  @Query((returns) => [Post])
  findAll() {
    return this.postsService.findAll();
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: PostInput) {
    this.pubSub.publish('postAdded', {
      postAdded: postInput,
    });
    return this.postsService.create(postInput);
  }

  @Subscription((returns) => Post, {
    name: 'postAdded',
  })
  postAdded() {
    return this.pubSub.asyncIterator('postAdded');
  }

  // @Query((returns) => Post, { name: 'post' })
  // findOne(@Args('id') id: string) {
  //   return this.postsService.findOne(id);
  // }
  //
  // @Mutation((returns) => Post)
  // updatePost(@Args('postInput') postInput: PostInput) {
  //   return this.postsService.update(postInput.id, postInput);
  // }
  //
  // @Mutation((returns) => Post)
  // removePost(@Args('id') id: string) {
  //   return this.postsService.remove(id);
  // }
}
