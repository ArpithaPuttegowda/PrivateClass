import { initData } from "./initData"

export const regRed=(state=initData,action)=>{
    if(action.type==="REG_DATA"){
        state={...state,regData:action.payload}
    }
return state
}