
import gql from "graphql-tag";
/*
export const makeBooking = async (meeting) => {
    return firestore.collection('Meeting').doc()
        .set(meeting)
}

export const cancelBooking = async (id, data) => {
    return firestore.collection('Meeting').doc(id)
        .set(data)
}*/
export const createBooking = gql`
  mutation ( $input: BookingInput) {
    book(Input:  {
      numGuests: 2, 
      OrganiserId:"1234321",
      RoomId:"LJqUQPuIQ4cYXw8me8Zo",
      MeetingAgenda:"Mike test 1 2",
      CheckIn:"2019-08-30T09:30:00.000Z",
      CheckOut:"2019-08-30T11:30:00.000Z",
      Attendees:["ejgithinji@gmail.com","elijah@finesoftafrika.com"]}) 
      {
      success
    }
  }
`;

export const makeBook = gql`
mutation  ($input: BookingInput){
  book (Input: $input) {
    success
  }
}

`