import auth from '@react-native-firebase/auth';


export const login = async user => {
    return await auth().signInWithEmailAndPassword(user.email, user.password);
}


export const logout = async () => {
    return await auth().signOut()
}

export const signup = async user => {
    return await auth().createUserWithEmailAndPassword(user.email, user.password);
}

export const getclaims = async () => {
    await auth().currentUser.getIdToken(true)
    return await auth().currentUser.getIdTokenResult()
}