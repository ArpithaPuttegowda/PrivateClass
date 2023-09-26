import { useState } from "react"
import { useDispatch } from "react-redux"
import { setName } from "./slice"

export const A = () => {
    const dispatch=useDispatch()
    const [val,setVal]=useState("")
    const handleName=()=>{
      dispatch(setName(val))
      setVal("")
    }
  return (
    <div>
        <input value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={handleName}>Name</button>
    </div>
  )
}
