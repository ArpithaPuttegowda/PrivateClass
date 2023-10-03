import {all} from "redux-saga/effects"
import rootCounter from "./couterSaga"
import rootAjax from "./ajaxSaga"


function* rootSaga(){
  yield all([rootAjax(),rootCounter()])
}

export default rootSaga;