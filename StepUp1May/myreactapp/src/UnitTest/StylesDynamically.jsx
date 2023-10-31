import { useState } from "react"

export const StylesDynamically = () => {
    const [count,setCount]=useState(0)
    const [input,setInput]=useState("")
    const handleSub=()=>{
      setCount(count-Number(input))
    }
    const handleAdd=()=>{
      setCount(count+Number(input))
    }
  return (
    <div>
        <h1>Counter</h1>
        <button onClick={handleSub}>-</button>
        <input value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={handleAdd}>+</button>
        <h2>{count}</h2>
    </div>
  )
}
