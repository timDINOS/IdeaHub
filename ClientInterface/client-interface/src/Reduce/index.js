import { combineReducers } from "redux";
import authReducer from "./authenticate";
import errorReducer from "./error";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
