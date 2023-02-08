import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {nameLocReducer} from "../Reducers/reducer";
import middlewareRed from "../Reducers/reducerMiddleware";
import logger from "redux-logger";

const rootReducer = combineReducers({
  nl: nameLocReducer,
  mr: middlewareRed
});

const myStore = configureStore({
  reducer: rootReducer,
  middleware: [logger]
}); // space//{}//global state

export default myStore;
