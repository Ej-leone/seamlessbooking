//import firestore from '@react-native-firebase/firestore';
import gql from 'graphql-tag';
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

mutation {
    book  {
        success
    }
}

`;