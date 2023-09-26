import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {setChangeName, setCount} from "../slice/changeNameSlice"

export const ChangeNameWithReduxToolkit = () => {
    const storeData=useSelector(state=>state)
    const dispatch=useDispatch()
    const [val,setVal]=useState("")
    const handleClick=()=>{
        dispatch()
        setVal("")
    }

  return (
    <div><h1>Change Name with ReduxToolkit</h1>
        <input value={val} onChange={(e)=>setVal(e.target.value)}/>
        <button onClick={()=>handleClick()}>Change Name</button>
        <h1>Name:{storeData?.changeNameRedRTK?.name}</h1>

        <button onClick={()=>dispatch(setCount(100))}>Change count...{storeData.changeNameRedRTK.count}</button>
    </div>
  )
}
