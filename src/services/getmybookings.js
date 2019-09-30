import gql from "graphql-tag";

export const getmybookingsQuery = gql`
  query  ($email: String , $id:String){
    getmymeetings (usermail: $email, userId: $id) {
      id
      MeetingAgenda
      numGuests
      CheckIn
      CheckOut
      OrganiserId
      RoomId
    }
  }
`;

export const getmyFavouriteQuery = gql`
  query {
    getrooms {
      Name
    }
  }
`;
