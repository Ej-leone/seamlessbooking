import gql from "graphql-tag";

export const roomQuery = gql`
  query {
    getrooms {
      Name
    }
  }
`;

export const roomDescriptionQuery = gql`
  query($RoomId: String!) {
    getRoomDetail(RoomId: $RoomId) {
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
      id
      Name
    }
  }
`;

export const getClosedRooms = gql`
  query {
    getrooms {
      id
      Name
    }
  }
`;


export const searchRooms = gql`
  query($bookinginfo : Bquery) {
    findrooms (info : $bookinginfo){
        Name
    }
  }
`