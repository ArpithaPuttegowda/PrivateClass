import {combineReducers, configureStore} from "@reduxjs/toolkit";
import ajaxReducer from "../Reducers/ajaxReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../Actions/SagaAction/rootSaga";
import nameLocReducer from "../ReduxToolkit/slice";

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
  ajax: ajaxReducer,
  nameLoc: nameLocReducer
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [logger, thunk, saga]
});
saga.run(rootSaga);

export default store;
