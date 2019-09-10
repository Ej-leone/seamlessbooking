import { firebase } from "@react-native-firebase/messaging";

// Move to a proper place
export const handleFCMNotification = async message => {
  console.log("FCM OFFLINE: ", message);
  return Promise.resolve();
};
