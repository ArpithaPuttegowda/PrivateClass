import { useState } from "react"

export const VirtualDom = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("sachin")
  return (
    <div>
        {alert("called")}
        50000lines
        <button onClick={()=>setCount(count+1)}>Count ..{count}</button>
        <button onClick={()=>setName("Dhoni")}>Name ..{name}</button>
    </div>
  )
}
