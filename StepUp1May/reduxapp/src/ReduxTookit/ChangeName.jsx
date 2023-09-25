import { useState } from "react"

export const ChangeName = () => {
    const [val,setVal]=useState("")
    const [name,setName]=useState("John")
    const handleClick=()=>{
        setName(val)
        setVal("")
    }
  return (
    <div>ChangeName:::
        <input value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={()=>handleClick()}>Change Name</button>
        <h1>Name:{name}</h1>
    </div>
  )
}
