import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { regRed } from "./regRed";
import logger from "redux-logger";

const rootRed=combineReducers({
    regRed,
})
const store=configureStore({
    reducer:rootRed,
    middleware:[logger]
})

export default store