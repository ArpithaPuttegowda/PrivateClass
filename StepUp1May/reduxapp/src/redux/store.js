import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { regRed } from "./regRed";
import logger from "redux-logger";
import changeNameRed from "../reducers/changeNameRed";
import changeNameRedRTK from "../slice/changeNameSlice"
import nameLocRedRTK from "../ReduxTookit/ReduxToolkitNameLoc/slice"
import counterRedRTK from "../ReduxTookit/CounterWithRTK/counterSlice";
import thunk from "redux-thunk";
import nameRed from "../connectMethod/nameRed";
import { ajaxRed } from "../reducers/ajax";

const reducer=combineReducers({
    regRed,
    changeNameRed,
    changeNameRedRTK,
    nameLocRedRTK,
    counterRedRTK,
    nameRed,
    ajaxRed
})
const store=configureStore({
    reducer,
    middleware:[logger,thunk]
})

export default store