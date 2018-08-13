import {combineReducers} from "redux";

const initialState = {
  count: 0
};

const reducer = (state = initialState, action) => {
  return state;
}


const rootReducer = combineReducers({
  firstReducer: reducer
});

export default rootReducer;
