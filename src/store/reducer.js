import {LOGIN, LOGOUT} from "./actions";
import {combineReducers} from "redux";

const initialState = {
  loggedIn: localStorage.getItem('token') !== null,
  token: localStorage.getItem('token')
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.token);
      return {...state, loggedIn: true, token: action.token};
    case LOGOUT:
      localStorage.removeItem('token');
      return {...state, loggedIn: false, token: null};
    default:
      return {...state}
  }
};

const rootReducer = combineReducers({
  auth: reducer
})

export default rootReducer;