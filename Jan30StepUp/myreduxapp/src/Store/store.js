import {combineReducers, configureStore} from "@reduxjs/toolkit";
import nameLocReducer from "../Reducers/nameLocReducer";
import logger from "redux-logger";
import ajaxRed from "../Reducers/ajax";
import nameLoc from "../Reducers/nameLocRedC";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  nl: nameLocReducer,
  ajax: ajaxRed,
  nlC: nameLoc
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk]
});

export default store;
