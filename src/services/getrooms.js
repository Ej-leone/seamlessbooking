import gql from 'graphql-tag';

export const roomQuery = gql`
query {
    getrooms {
       Name
   }

}
`;

export const roomDescriptionQuery = gql`
query {
    getopenrooms {
       Name
   }

  
   
}
`;


