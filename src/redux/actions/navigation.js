
import * as types from './types';
import { login, logout } from '../../services/authentication'
//import user from '../../data/user.json';

const setLoggedInState = loggedInState => (
  {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState,
  }
);

const logIn = (email, password) => {
  const action = (dispatch) => {
    dispatch({ type: types.SIGN_IN_REQUEST });

    login({ email, password }).then(
      user => {

        console.log(user)
        dispatch({ type: types.SIGN_IN_SUCCESS, payload: user });
      }
    ).catch(error => {

      console.log(error)
      dispatch({ type: types.SIGN_IN_FAILURE, payload: authFailMessage(error.code) });

    })

  };
  return action;
};


const signOutUser = () => (dispatch) => {
  dispatch({ type: types.SET_INITIAL_STATE });
  logout()

};



const authFailMessage = (errorCode) => {
  switch (errorCode) {
    case 'auth/invalid-email':
      return 'Email is invalid.';
    case 'auth/user-disabled':
      return 'User is disabled. Contact the administrator of your organisation';
    case 'auth/user-not-found':
      return 'User not found. Contact the administrator of your organisation';
    case 'auth/wrong-password':
      return 'Password is invalid.';
    case 'auth/email-already-in-use':
      return 'Email address is already in use.';
    case 'auth/weak-password':
      return 'Password is not strong enough.';
    default:
      return 'Authentication failed.';
  }
};







export {
  logIn,
  signOutUser,
  setLoggedInState,
};
