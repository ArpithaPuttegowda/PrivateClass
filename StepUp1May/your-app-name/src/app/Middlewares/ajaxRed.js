const initData={
    comments:[]
}
const ajaxRed=(state=initData,action)=>{
    console.log(action.payload,"payload")
    switch(action.type){
        case "COMMENTS":
      return   state={...state,comments:action.payload}
        default:
    }
    console.log(state,"logger")
    return state

}

export default ajaxRed