import { useState } from "react"
import { useEffect } from "react"

export const Ajax = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>res.json()).then((data)=>{setPosts(data)}).catch((e)=>console.log(e))
    },[])
  return (
    <div>
      {
        posts?.slice(0,3)?.map((obj)=>{
            return <h1 key={obj.id}>{obj?.title}</h1>
        })
      }
    </div>
  )
}
