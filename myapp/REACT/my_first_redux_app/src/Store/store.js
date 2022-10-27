import {configureStore} from "@reduxjs/toolkit";
import nameLocReducer from "../Reducers/nameLocReducer";
import postRed from "../Reducers/postRed";
import {nameLocRedClass} from "../Reducers/nameLocRedClass";

const rootReducer = {
  nameLoc: nameLocReducer,
  postRed,
  nameLocRedClass: nameLocRedClass
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
