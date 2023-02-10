import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {nameLocReducer} from "../Reducers/reducer";
import middlewareRed from "../Reducers/reducerMiddleware";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../../Saga/rootSaga";

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  nl: nameLocReducer,
  mr: middlewareRed
});

const myStore = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk, saga]
}); // space//{}//global state

saga.run(rootSaga);

export default myStore;
