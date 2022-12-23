import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {myReducer} from "../Reducers/reducer";

const rootReducer = combineReducers({
  nameLocRed: myReducer
});
const myStore = configureStore({
  reducer: rootReducer
});

export default myStore;
