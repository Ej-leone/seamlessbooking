import gql from 'graphql-tag';

export const roomQuery = gql`
query {
    getrooms {
       Name
   }
}
`;

