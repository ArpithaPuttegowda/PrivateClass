import { combineReducers, configureStore } from "@reduxjs/toolkit";
import namesRed from "./namesRed";
import ajaxRed from "../Middlewares/ajaxRed";
import logger from "redux-logger";


const rootRed=combineReducers({
    namesRed,
    ajaxRed
})

const store=configureStore({
    reducer:rootRed,
    middleware:[logger]
})

export default store