import { useState } from "react"
import { useCallback } from "react"
import { A } from "./A"
import { B } from "./B"
import { C } from "./C"

export const WithourRedux = () => {
    const [name,setName]=useState("")
    const [loc,setLoc]=useState("")
    const getName=useCallback((data)=>{
        setName(data)
    },[])
    const getLoc=useCallback((data)=>{
        setLoc(data)
    },[])
  return (
    <div>
        <A nameFn={getName}/>
        <B locFn={getLoc}/>
        <C name={name} loc={loc}/>
    </div>
  )
}
