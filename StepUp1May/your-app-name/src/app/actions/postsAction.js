import ServiceCall from "../ServiceCallService/service"

export const postAction=async(dispatch)=>{
 const res=await ServiceCall.get("https://jsonplaceholder.typicode.com/posts")
 dispatch({
    type:"POSTS",
    payload:res?.data
 })
}