import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { regRed } from "./regRed";
import logger from "redux-logger";
import changeNameRed from "../reducers/changeNameRed";
import changeNameRedRTK from "../slice/changeNameSlice"

const rootRed=combineReducers({
    regRed,
    changeNameRed,
    changeNameRedRTK

})
const store=configureStore({
    reducer:rootRed,
    middleware:[logger]
})

export default store