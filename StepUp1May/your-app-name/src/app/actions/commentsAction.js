import ServiceCall from "../ServiceCallService/service"

export const commentsAction=(d)=>{
    ServiceCall.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
        console.log(res.data)
        d({
          type:"COMMENTS",
          payload:res.data
        })
      }).catch((res)=>{
             console.log(res)
      })
}