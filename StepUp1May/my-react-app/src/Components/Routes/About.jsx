import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

const About = () => {
  const dispatch=useDispatch()
  const storeData=useSelector(state=>state)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments").then((res)=>{
        }).catch((e)=>{
         console.log(e)
        })
    },[])
  return (
    <div>About...{storeData?.counter?.count}
    <button onClick={()=>dispatch({
      type:"DEC"
    })}>Dec Btn</button></div>
  )
}

export default About