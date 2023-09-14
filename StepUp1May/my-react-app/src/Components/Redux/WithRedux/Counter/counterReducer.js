import { initData } from "./initData"

export const counterReducer=(state=initData,action)=>{
if(action.type==="INC"){
    state={...state,count:state.count+1}
}
if(action.type==="DEC"){
    state={...state,count:state.count-1}
}
if(action.type==="RESET"){
    state={...state,count:0}
}
return state
}