import {call, put, takeLatest} from "redux-saga/effects"
import {ServerCallService} from  "../ServerCallService/ServerCallService"

function* comments(){
 const res=yield call(ServerCallService.fetchData,"https://jsonplaceholder.typicode.com/comments")
 yield put({
    type:"MY_COMMENTS",
    payload:res.data
 })
}

function* post(){
 const res=   yield call (ServerCallService.fetchData,"https://jsonplaceholder.typicode.com/posts")
 console.log(res.data,"posts")
 yield put({
    type:"MY_POSTS",
    payload:res.data
 })
}

function* users(){
    
}



function* rootAjax(){
    yield takeLatest("COMMENTS_SAGA",comments)
    yield takeLatest("USERS",users)
    yield takeLatest("POST_SAGA",post)
}



export default rootAjax