import {LOGIN, LOGOUT} from "./actions";
import {combineReducers} from "redux";
import axios from 'axios-instance';

const initialState = {
  loggedIn: localStorage.getItem('token') !== null,
  token: localStorage.getItem('token')
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      axios.defaults.headers.common['Authorization'] = 'JWT ' + action.token;
      localStorage.setItem('token', action.token);
      return {...state, loggedIn: true, token: action.token};
    case LOGOUT:
      delete axios.defaults.headers.common["Authorization"];
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