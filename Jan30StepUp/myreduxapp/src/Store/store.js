import {combineReducers, configureStore} from "@reduxjs/toolkit";
import nameLocReducer from "../Reducers/nameLocReducer";
import logger from "redux-logger";
import ajaxRed from "../Reducers/ajax";

const rootReducer = combineReducers({
  nl: nameLocReducer,
  ajax: ajaxRed
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger]
});

export default store;
