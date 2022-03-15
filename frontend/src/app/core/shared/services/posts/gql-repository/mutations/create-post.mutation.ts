import { gql } from 'apollo-angular';

export const createPostMutation = gql`
  mutation createPost($postInput: PostInput!) {
    createPost(postInput: $postInput) {
      id
      title
      content
    }
  }
`;
