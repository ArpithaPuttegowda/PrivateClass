
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nameLocRed from "./nameLocRed";
import { paymentInfo } from "./PaymentInfo";

const rootRed=combineReducers({
    nl:nameLocRed,
    paymentR:paymentInfo
})

const store=configureStore({
    reducer:rootRed
})


export default store