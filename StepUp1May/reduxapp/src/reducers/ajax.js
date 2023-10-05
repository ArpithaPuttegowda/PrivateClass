const initData={
    posts:[],
    my_comments:[],
    my_posts:[]
}

export const ajaxRed=(state=initData,action)=>{
    if(action.type==="POSTS"){
    state={...state,posts:action.payload}
    }
    if(action.type==="MY_COMMENTS"){
        state={...state,my_comments:action.payload}
    }
    if(action.type==="MY_POSTS"){
      state={...state,my_posts:action.payload}
    }
    return state
}