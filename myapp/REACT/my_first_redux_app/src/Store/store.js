import {configureStore} from "@reduxjs/toolkit";
import nameLocReducer from "../Reducers/nameLocReducer";
import postRed from "../Reducers/postRed";
import {nameLocRedClass} from "../Reducers/nameLocRedClass";
import nameLocRed from "../Components/ReduxToolkit/slice";
import ajaxRed from "../Components/ReduxToolkit/ajaxSlice";

const rootReducer = {
  nameLoc: nameLocReducer,
  postRed,
  nameLocRedClass: nameLocRedClass,
  nameLocRed,
  ajax: ajaxRed
};

const store = configureStore({
  reducer: rootReducer
});

export default store;
