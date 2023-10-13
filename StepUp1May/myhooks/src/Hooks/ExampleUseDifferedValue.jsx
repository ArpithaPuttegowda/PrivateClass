import { useDeferredValue } from "react"
import { useMemo } from "react"
import { useState } from "react"

export const ExampleUseDifferedValue = () => {
    const [input,setInput]=useState("")
    const handleChange=(e)=>{
        setInput(e.target.value)
    }
  return (
    <div>
        <input onChange={handleChange} value={input}/>
        <List input={input}/>
    </div>
  )
}

const List=({input})=>{
    const List_delay=200000
    const differedInput=useDeferredValue(input)
const list=useMemo(()=>{
   let l=[]
   for(let i=0;i<List_delay;i++){
    l.push(<h1 key={i}>{differedInput}</h1>)
   }
   return l
},[differedInput])
return list
}

