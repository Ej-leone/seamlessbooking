import { combineReducers } from "redux";
import * as Navigation from "./navigation";
import * as AuthenticationReducer from "./authentication";

export default combineReducers(
  Object.assign(Navigation, AuthenticationReducer)
);
