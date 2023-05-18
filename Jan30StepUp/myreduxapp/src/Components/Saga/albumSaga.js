import { call, takeLatest, put } from "redux-saga/effects";
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

function* rootAlbum() {
  yield takeLatest("PHOTOS_SAGA", photos);
  yield takeLatest("USER_ALBUM", userAlbum);
}

export default rootAlbum;
