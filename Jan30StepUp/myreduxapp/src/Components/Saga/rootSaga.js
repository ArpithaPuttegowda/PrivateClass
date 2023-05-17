

import {all} from "redux-saga/effects"
import rootAlbum from "./albumSaga"
import rootPayment from "./paymentSaga"

function* rootSaga(){
    yield all([rootAlbum(),rootPayment()])
}

export default rootSaga;