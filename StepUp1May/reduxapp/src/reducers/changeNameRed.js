import { initDataChangeName } from "../redux/initData"

const changeNameRed=(state=initDataChangeName,action)=>{
    if(action.type==="CHANGE_NAME"){
        state={...state,name:action.name}
    }
return state
}

export default changeNameRed