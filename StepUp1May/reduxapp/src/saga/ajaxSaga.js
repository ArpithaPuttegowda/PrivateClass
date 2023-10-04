import {call, put, takeLatest} from "redux-saga/effects"
import {ServerCallService} from  "../ServerCallService/ServerCallService"

function* comments(){
 const res=yield call(ServerCallService.fetchData,"https://jsonplaceholder.typicode.com/comments")
 console.log(res,"my comments")
 yield put({
    type:"MY_COMMENTS",
    payload:res.data
 })
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