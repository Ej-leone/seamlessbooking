import auth from '@react-native-firebase/auth';


export const login = async user => {
    return await auth().signInWithEmailAndPassword(user.email, user.password);
}


export const signup = async user => {
    return await auth().createUserWithEmailAndPassword(user.email, user.password);
}
