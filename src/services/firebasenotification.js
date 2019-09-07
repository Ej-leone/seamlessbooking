import firebase, { RemoteMessage } from 'react-native-firebase';

// Move to a proper place
export const handleFCMNotification = async (message) => {
    console.log('FCM OFFLINE: ', message);
    return Promise.resolve();
}