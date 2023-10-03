import {takeLatest} from "redux-saga/effects"

function* comments(){
   alert("comments")
}

function* post(){
    
}

function* users(){
    
}


function* rootAjax(){
    yield takeLatest("COMMENTS_SAGA",comments)
    yield takeLatest("USERS",users)
}


export default rootAjax