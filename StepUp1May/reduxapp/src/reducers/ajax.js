const initData={
    posts:[],
    my_comments:[]
}

export const ajaxRed=(state=initData,action)=>{
    if(action.type==="POSTS"){
    state={...state,posts:action.payload}
    }
    if(action.type==="MY_COMMENTS"){
        state={...state,my_comments:action.payload}
    }
    return state
}