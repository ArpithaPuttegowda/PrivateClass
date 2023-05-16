import ServerCallService from "../ServerCallService/ServerCallService"

export const userAction=()=>{
    return (myDispatch,getState)=>{
        const state=getState()
       console.log(getState(),"mystate")
       if(!state?.ajax?.users?.length){
        ServerCallService.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
            myDispatch({
                type:"USERS",
                payload:res.data
            })
            }).catch(()=>{})
       }
      
    }
}