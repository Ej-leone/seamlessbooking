
import * as types from './types';
//import user from '../../data/user.json';

const setLoggedInState = loggedInState => (
  {
    type: types.SET_LOGGED_IN_STATE,
    loggedInState,
  }
);

const logIn = (email, password) => {
  const action = (dispatch) => {
    if (email === "ej@sa.com" && password === "12345") {
      dispatch(setLoggedInState(true));
      return true;
    }
    dispatch(setLoggedInState(false));
    return false;
  };
  return action;
};

export {
  logIn,
  setLoggedInState,
};
