import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {nameLocReducer} from "../Reducers/reducer";

const rootReducer = combineReducers({
  nameLoc: nameLocReducer
});

const myStore = configureStore({
  reducer: rootReducer
}); // space//{}//gs

export default myStore;
