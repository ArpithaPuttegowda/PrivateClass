import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { regRed } from "./regRed";
import logger from "redux-logger";
import changeNameRed from "../reducers/changeNameRed";
import changeNameRedRTK from "../slice/changeNameSlice"
import nameLocRedRTK from "../ReduxTookit/ReduxToolkitNameLoc/slice"
import counterRedRTK from "../ReduxTookit/CounterWithRTK/counterSlice";

const reducer=combineReducers({
    regRed,
    changeNameRed,
    changeNameRedRTK,
    nameLocRedRTK,
    counterRedRTK
})
const store=configureStore({
    reducer,
    middleware:[logger]
})

export default store