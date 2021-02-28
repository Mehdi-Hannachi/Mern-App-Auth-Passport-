import { combineReducers } from "redux";
import userReducer from "./userReducer";
import snackBarReducer from "./snackBar";

const rootReducers = combineReducers({
  userReducer,
  snackBarReducer,
});

export default rootReducers;
