import gql from 'graphql-tag';

export const roomQuery = gql`
query {
    getrooms {
       Name
   }

}
`;

export const roomDescriptionQuery = gql`
query ($roomId: String!){
    getRoomDetail (RoomId: $roomId){
       Name
       Capacity
       Description
       Building

   }

  
   
}
`;

export const getOpenRooms = gql`
query {
    getrooms {
        
       Name
   }

}
`;



export const getClosedRooms = gql`
query {
    getrooms {
        
       Name
   }

}
`;
