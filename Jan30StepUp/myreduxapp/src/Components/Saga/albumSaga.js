import { call, takeLatest, put, throttle } from "redux-saga/effects";
import ServerCallService from "../../ServerCallService/ServerCallService";

function* photos() {
  try {
    let res = yield call(
      ServerCallService.get,
      "https://jsonplaceholder.typicode.com/users"
    );
    yield put({
      type: "USERS_SAGA",
      payload: res.data,
    });
  } catch (e) {
    yield put({
      type: "ERROR_USERS",
      payload: e?.message,
    });
  }
}

function* userAlbum() {}
function* todos() {
  const res = yield call(
    ServerCallService.get,
    "https://jsonplaceholder.typicode.com/todos"
  );
  yield put({
    type: "TODO",
    todo: res.data,
  });
}

function* rootAlbum() {
  yield throttle(5000, "PHOTOS_SAGA", photos);
  yield takeLatest("USER_ALBUM", userAlbum);
  yield throttle(4000, "TODO_SAGA", todos);
}

export default rootAlbum;
