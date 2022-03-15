import { gql } from 'apollo-angular';

export const findAllQuery = gql`
  query {
    findAll {
      id
      title
      content
    }
  }
`;
