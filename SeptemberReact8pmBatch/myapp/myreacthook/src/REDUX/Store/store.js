import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {myReducer} from "../Reducers/reducer";
import ajaxReducer from "../Reducers/ajaxReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  nameLocRed: myReducer,
  ajax: ajaxReducer
});
const myStore = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk]
});

export default myStore;
