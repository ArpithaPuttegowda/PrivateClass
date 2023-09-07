import { useCallback } from "react"
import { memo } from "react"
import { useState } from "react"

export const ExampleuseCallback2 = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("sachin")
    const [loc,setLoc]=useState("Mumbai")

    const getCount=useCallback((myCount)=>{
        console.log(myCount)
        setCount(myCount)
    },[])

  return (
    <div>
        <Child fn={getCount}/>
        <h1>Count...{count}</h1>
        <button onClick={()=>setName("Dhoni")}>ChangeName...{name}</button>
        <button onClick={()=>setLoc("Ranchi")}>ChangeLoc...{loc}</button>
    </div>
  )
}


// eslint-disable-next-line react/prop-types
let Child=({fn})=>{
    alert("child called")
    let count=0
    const handleCount=()=>{
      count=count+1
      fn(count)
    }
    return <div>
        <button onClick={handleCount}>Inc Count</button>
    </div>
}

Child=memo(Child)
