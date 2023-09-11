import axios from "axios"
import { useEffect } from "react"

const Home = () => {
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
         console.log(e)
        })
    },[])
  return (
    <div>I`m Home</div>
  )
}

export default Home
