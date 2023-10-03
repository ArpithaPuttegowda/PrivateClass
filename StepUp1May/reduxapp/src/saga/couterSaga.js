import { takeLatest } from "redux-saga/effects";

function* incCount(){

}


function* rootCounter(){
    yield takeLatest("INC",incCount)
}

export default rootCounter;