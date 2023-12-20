// reducers.js
import { combineReducers } from "redux";
import someReducer from "./someReducer";

const rootReducer = combineReducers({
  someReducer,
  // add more reducers as needed
});

export default rootReducer;
