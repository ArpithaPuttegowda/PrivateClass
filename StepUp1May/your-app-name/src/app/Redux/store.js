import { combineReducers, configureStore } from "@reduxjs/toolkit";
import namesRed from "./namesRed";


const rootRed=combineReducers({
    namesRed
})

const store=configureStore({
    reducer:rootRed
})

export default store