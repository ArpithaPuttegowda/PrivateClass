import {combineReducers, configureStore} from "@reduxjs/toolkit";
import nameLocReducer from "../Reducers/nameLocReducer";

const rootReducer = combineReducers({
  nl: nameLocReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
