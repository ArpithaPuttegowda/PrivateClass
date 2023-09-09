import axios from "axios"
import { useEffect } from "react"

export const About = () => {
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
         console.log(e)
        })
    },[])
  return (
    <div>About</div>
  )
}
