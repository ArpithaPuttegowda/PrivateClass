const initData={
    posts:[]
}

export const ajaxRed=(state=initData,action)=>{
    if(action.type==="POSTS"){
    state={...state,posts:action.payload}
    }
    return state
}