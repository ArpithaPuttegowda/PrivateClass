import { useState } from "react"
import "../index.css"

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
        <div>Counter</div>
        <button data-testid="dec-btn" onClick={handleSub}>-</button>
        <input data-testid="input" value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button data-testid="inc-btn" onClick={handleAdd}>+</button>
        <h2 className={count>100?"cg":"cr"} data-testid="count">{count}</h2>
    </div>
  )
}
