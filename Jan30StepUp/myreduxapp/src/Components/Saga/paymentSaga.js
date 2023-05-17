

import {takeLatest} from "redux-saga/effects"


function* invoiceInfo(){

}

function* creditInfo(){

}


function* rootPayment(){
    yield takeLatest("INVOICE",invoiceInfo)
    yield takeLatest("CREDIT",creditInfo)
}

export default rootPayment