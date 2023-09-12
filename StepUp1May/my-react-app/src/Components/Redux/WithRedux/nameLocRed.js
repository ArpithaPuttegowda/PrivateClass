import initData from "./initData"

const  nameLocRed=(state=initData,action)=>{
    console.log(action)
if(action.type==="NAME"){
    state= {...state,name:action.payload}
}
console.log(state,"updated state")
return state
}

export default nameLocRed