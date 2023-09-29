import initData from "./initData"

const nameRed=(state=initData,action)=>{
    if(action.type==="N"){
        return state={...state,name:action.payload}
    }
    return state
}

export default nameRed