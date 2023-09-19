import initData from "./initData"

const namesRed=(state=initData,action)=>{
    switch(action.type){
    case "NAME":
      return  state={...state,names:action.payload}
      default:
        return state
    }
}

export default namesRed