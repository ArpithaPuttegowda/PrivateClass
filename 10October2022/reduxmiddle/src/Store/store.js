import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ajaxReducer from "../Reducers/ajaxReducer";
import logger from "redux-logger";

const rootReducer = combineReducers({
  ajax: ajaxReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger]
});

export default store;
