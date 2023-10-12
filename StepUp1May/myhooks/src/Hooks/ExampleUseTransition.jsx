import { useState, useTransition } from "react"

export const ExampleUseTransition = () => {
    const[isPending,startTransition]=useTransition()
    const List_duration=20000
    const [input,setInput]=useState("")
    const [list,setList]=useState([])

    const handleChange=(e)=>{
     setInput(e.target.value)
     startTransition(()=>{
        const l=[]
        for(let i=0;i<List_duration;i++){
              l.push(e.target.value)
        }
        setList(l)
     })
    }
   
  return (
    <div>
        <input value={input} onChange={handleChange}/>
        {
            isPending?<div>Loading</div>: list.map((l,i)=>{
                return <div key={i+l}>{l}</div>
                })}
    </div>
  )
}
