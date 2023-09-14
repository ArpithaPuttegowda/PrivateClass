import initData from "./initData"

const  nameLocRed=(state=initData,action)=>{
if(action.type==="NAME"){
    state= {...state,name:action.payload}
}
if(action.type==="LOC"){
    state={...state,loc:action.data}
}
return state
}

export default nameLocRed