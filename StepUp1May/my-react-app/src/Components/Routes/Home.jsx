import axios from "axios"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const Home = () => {
  const storeData=useSelector((state)=>state)
  console.log(storeData?.paymentR?.posts,"homeComp")
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            console.log(res.data)
        }).catch((e)=>{
         console.log(e)
        })
    },[])
  return (
    <div>I`m Home

      {
        storeData?.paymentR?.posts?.map((obj)=>{
          return <h1 key={obj.id}>{obj.title}</h1>
        })
      }
    </div>
  )
}

export default Home
