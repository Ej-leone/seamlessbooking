
import * as types from './types';
import { login } from '../../services/authentication'
//import user from '../../data/user.json';

const setLoggedInState = loggedInState => (
  {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState,
  }
);

const logIn = (email, password) => {
  const action = (dispatch) => {
    login({ email, password }).then(
      user => {
        // debugger
      }
    ).catch(error => {
      // debugger
      dispatch(setLoggedInState(false))
      //etruereturn true
    })
    /*if (email === "Ej@sa.com" && password === "123456") {
      dispatch(setLoggedInState(true));
      return true;
    }
    dispatch(setLoggedInState(false));
    return false;*/
    return true
  };
  return action;
};

export {
  logIn,
  setLoggedInState,
};
