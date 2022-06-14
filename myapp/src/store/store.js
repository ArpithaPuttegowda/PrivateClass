import {createStore, combineReducers} from "redux";
import reducer from "../Reducers/myReducer";
import reducer2 from "../Reducers/reducer2";

const rootReducer = combineReducers({
  nameReducer: reducer,
  locationReducer: reducer2
});

const store = createStore(rootReducer);

export default store;
