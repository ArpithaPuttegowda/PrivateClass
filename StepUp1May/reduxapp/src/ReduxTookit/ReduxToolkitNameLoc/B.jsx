import { useState } from "react"
import { useDispatch } from "react-redux"
import { setLoc } from "./slice"

export const B = () => {
    const dispatch=useDispatch()
    const [val,setVal]=useState("")
    const handleLoc=()=>{
      dispatch(setLoc(val))
      setVal("")
    }
  return (
    <div>
        <input value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={handleLoc}>Loc</button>
    </div>
  )
}
