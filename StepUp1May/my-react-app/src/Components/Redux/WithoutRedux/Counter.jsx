import { useState } from "react"

export const CounterMulti = () => {
    const [count,setCount]=useState(0)
  return (
    <div>
        <h1>Counter without redux...{count}</h1>
        <button onClick={()=>setCount(count+1)}>Inc Count</button>
        <button onClick={()=>setCount(count-1)}>Dec Count</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  )
}
