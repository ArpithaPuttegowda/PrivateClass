import { ServerCallService } from "../ServerCallService/ServerCallService"


export const postAction=()=>{
    alert("outerFunction execute")
    return ()=>{
        alert("inner function called")
    ServerCallService.fetchData("https://jsonplaceholder.typicode.com/posts")
    }
}
