import {all} from "redux-saga/effects";
import users from "./usersSaga";

function* rootSaga() {
  yield all([users()]);
}

export default rootSaga;
