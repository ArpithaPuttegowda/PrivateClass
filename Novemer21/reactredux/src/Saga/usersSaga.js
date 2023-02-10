import {call, takeLatest, put} from "redux-saga/effects";
import ServerCallService from "../Services/ServerCallService";
import {G_USERS} from "./constant";

function* generalUsers() {
  let res = yield call(
    ServerCallService.get,
    "https://jsonplaceholder.typicode.com/users"
  );
  yield put({
    type: "USERS",
    payload: res.data
  });
}

// function* paymentUsers() {}

// function* user3() {}

function* rootUsers() {
  yield takeLatest(G_USERS, generalUsers);
  // yield takeLatest("PU", paymentUsers);
}
export default rootUsers;
