import { useState } from "react"

export const useCount=(initialCount)=>{
    const [count,setCount]=useState(initialCount)
    const handleInc=()=>{
        setCount(count+1)
    }
    return {count,handleInc}
}


