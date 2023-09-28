import { ServerCallService } from "../ServerCallService/ServerCallService"


export const postAction=async(d)=>{
    const res= await ServerCallService.fetchData("https://jsonplaceholder.typicode.com/posts")
    console.log(res.data)
    d({
        type:"POSTS",
        payload:res.data
    })
}