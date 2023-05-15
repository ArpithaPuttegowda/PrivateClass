import ServerCallService from "../ServerCallService/ServerCallService"

export const userAction=()=>{
    return (myDispatch,state)=>{
        alert("called")
        ServerCallService.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
        myDispatch({
            type:"USERS",
            payload:res.data
        })
        }).catch(()=>{})
    }
}