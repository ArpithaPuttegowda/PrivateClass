import {call, put, takeLatest} from "redux-saga/effects";
import {ServerCallService} from "../../ServerCallService/ServerCallService";

function* payment1() {
  const resp = yield call(
    ServerCallService.get,
    "https://jsonplaceholder.typicode.com/paymentInfo"
  );
  console.log(resp);
}

function* payment() {
  yield takeLatest("PAYMENT_1", payment1);
}

export default payment;
