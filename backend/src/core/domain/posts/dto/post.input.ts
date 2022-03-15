import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class PostInput {
  @Field()
  id: string;

  @Field()
  title: string;

  @Field()
  content: string;
}
