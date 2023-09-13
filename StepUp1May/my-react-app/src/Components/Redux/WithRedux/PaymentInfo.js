import { paymentInfoInit } from "./initData"

export const paymentInfo=(state=paymentInfoInit,action)=>{
    if(action.type==="POSTS"){
        state={...state,posts:action.payload}
    }
    console.log(state,"upated posts")
 return state
}