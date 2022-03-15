import { gql } from 'apollo-angular';

export const PostAddedSubscription = gql`
  subscription {
    postAdded {
      id
      title
      content
    }
  }
`;
