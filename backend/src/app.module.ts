import { Module } from '@nestjs/common';
import { PostsModule } from './core/domain/posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

@Module({
  imports: [
    PostsModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
    }),
  ],
  controllers: [],
})
export class AppModule {}
