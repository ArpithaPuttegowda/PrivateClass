import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const ChangeNameWithRedux = () => {
    const storeData=useSelector(state=>state)
    const dispatch=useDispatch()
    const [val,setVal]=useState("")
    const handleClick=()=>{
        dispatch({
            type:"CHANGE_NAME",
            name:val
        })
        setVal("")
    }
  return (
    <div><h1>Change Name with Redux</h1>
        <input value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={()=>handleClick()}>Change Name</button>
        <h1>Name:{storeData?.changeNameRed?.name}</h1>
    </div>
  )
}
