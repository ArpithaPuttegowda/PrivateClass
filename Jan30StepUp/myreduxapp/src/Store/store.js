import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nameLocReducer from "../Reducers/nameLocReducer";
import logger from "redux-logger";
import ajaxRed from "../Reducers/ajax";
import nameLoc from "../Reducers/nameLocRedC";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Components/Saga/rootSaga";
import nameLocSlice from "../Components/ReduxToolkit/nameLocSlice";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  nl: nameLocReducer,
  ajax: ajaxRed,
  nlC: nameLoc,
  nlRTK: nameLocSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk, sagaMiddleware],
});
sagaMiddleware.run(rootSaga);

export default store;
