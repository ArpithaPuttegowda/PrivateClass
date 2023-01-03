import {combineReducers, configureStore} from "@reduxjs/toolkit";
import nameLocReducer from "../Reducers/reducer";

let rootRed = combineReducers({
  nameLocReducer
});

const store = configureStore({
  reducer: rootRed
});

export default store;
