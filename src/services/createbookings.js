import firestore from '@react-native-firebase/firestore';

export const makeBooking = async (meeting) => {
    return firestore.collection('Meeting').doc()
        .set(meeting)
}

export const cancelBooking = async (id, data) => {
    return firestore.collection('Meeting').doc(id)
        .set(data)
}