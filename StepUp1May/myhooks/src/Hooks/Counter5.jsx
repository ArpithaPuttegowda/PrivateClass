import { useContext } from "react"
import { useState } from "react"

export const Counter5 = () => {
    const [count,setCount]=useState(0)
    const handleClick1=()=>{
        setCount((prevState)=>prevState+1)
    }
    const handleClick5=()=>{
        handleClick1()
        handleClick1()
        handleClick1()
        handleClick1()
        handleClick1()
    }
  return (
    <div>
        <button onClick={handleClick1}>Inc 1</button>
        <button onClick={handleClick5}>Inc 5</button>
        <h1>{count}</h1>
    </div>
  )
}
