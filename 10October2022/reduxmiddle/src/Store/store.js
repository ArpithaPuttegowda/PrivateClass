import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ajaxReducer from "../Reducers/ajaxReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  ajax: ajaxReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk]
});

export default store;
