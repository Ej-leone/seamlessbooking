import gql from 'graphql-tag';

export const roomQuery = gql`
query {
    getrooms {
       Name
   }

}
`;

export const exploreQuery = gql`
query {
    getopenrooms {
       Name
   }

  
   
}
`;


