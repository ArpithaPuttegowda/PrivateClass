import { ServerCallService } from "../ServerCallService/ServerCallService"


export const postAction=()=>{
    return async(dispatch,getState)=>{
        if(!getState()?.ajaxRed?.posts?.length){
        let res=await  ServerCallService.fetchData("https://jsonplaceholder.typicode.com/posts")
        dispatch({
            type:"POSTS",
            payload:res.data
        })
    }
}
}
