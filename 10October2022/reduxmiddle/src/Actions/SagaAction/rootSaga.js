import {all} from "redux-saga/effects";
import payment from "./paymentInfo";
import users from "./userSaga";

function* rootSaga() {
  return yield all([users(), payment()]);
}

export default rootSaga;
