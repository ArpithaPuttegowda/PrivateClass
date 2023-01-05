import {combineReducers, configureStore} from "@reduxjs/toolkit";
import nameLocReducer from "../Reducers/reducer";
import {reducerC} from "../Reducers/reducerC";

let rootRed = combineReducers({
  nameLoc: nameLocReducer,
  nameLocC: reducerC
});

const store = configureStore({
  reducer: rootRed
});

export default store;
