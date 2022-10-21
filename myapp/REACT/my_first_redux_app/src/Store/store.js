import {configureStore} from "@reduxjs/toolkit";
import nameLocReducer from "../Reducers/nameLocReducer";
import postRed from "../Reducers/postRed";

const rootReducer = {
  nameLoc: nameLocReducer,
  postRed
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
