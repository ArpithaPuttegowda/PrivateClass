
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import nameLocRed from "./nameLocRed";

const rootRed=combineReducers({
    nl:nameLocRed,
})

const store=configureStore({
    reducer:rootRed
})


export default store