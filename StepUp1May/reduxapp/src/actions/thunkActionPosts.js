import { ServerCallService } from "../ServerCallService/ServerCallService"


export const postAction=()=>{
    alert("called")
    return async(d,s)=>{
        alert("called")
        const res= await ServerCallService.fetchData("https://jsonplaceholder.typicode.com/posts")
        console.log(res.data)
        d({
            type:"POSTS",
            payload:res.data
        })
    }
    
}