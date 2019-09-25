import gql from "graphql-tag";

export const getmybookingsQuery = gql`
  query  ($email: String , $id:String){
    getmymeetings (usermail: $email, userId: $id) {
      MeetingAgenda
      numGuests
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
