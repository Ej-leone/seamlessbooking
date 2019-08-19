import auth from '@react-native-firebase/auth'; s

export const login = async user => {
    return await auth().createUserWithEmailAndPassword(user.email, user.password);
}
