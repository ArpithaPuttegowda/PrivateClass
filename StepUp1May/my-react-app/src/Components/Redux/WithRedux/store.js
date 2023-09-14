
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./Counter/counterReducer";
import nameLocRed from "./nameLocRed";
import { paymentInfo } from "./PaymentInfo";
import {logger} from "redux-logger"

const rootRed=combineReducers({
    nl:nameLocRed,
    paymentR:paymentInfo,
    counter:counterReducer
})

const store=configureStore({
    reducer:rootRed,
    middleware:[logger]
})


export default store