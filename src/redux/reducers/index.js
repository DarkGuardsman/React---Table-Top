import {combineReducers} from "redux";
import authReducer from "./auth";
import characterReducer from "./character";

const rootReducer = combineReducers({auth: authReducer, character: characterReducer});
export default rootReducer;