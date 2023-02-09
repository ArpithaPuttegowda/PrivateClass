import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {nameLocReducer} from "../Reducers/reducer";
import middlewareRed from "../Reducers/reducerMiddleware";
import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  nl: nameLocReducer,
  mr: middlewareRed
});

const myStore = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk]
}); // space//{}//global state

export default myStore;
