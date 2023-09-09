import { useMemo } from "react"
import { useState,memo } from "react"

export const ReactMemoAndUseMemo = () => {
    const [count,setCount]=useState(0)
    const [name,setName]=useState("Sachin")

    const delay=useMemo(()=>{
        for(let i=0;i<=500000000;i++){ /* empty */ }
        return 10
    },[])

  return (
    <div>
        <Child1 count={count}/>
        <Child2/>
        {delay}
        <button onClick={()=>setCount(count+1)}>Inc Count...{count}</button>
        <button onClick={()=>setName("Dhoni")}> Set Name...{name}</button>
    </div>
  )
}

// eslint-disable-next-line react/display-name, react/prop-types
const Child1=memo(({count})=>{
    return <div>
        I`m Child 1 ...{count}
    </div>
})

// eslint-disable-next-line react/display-name
const Child2=memo(()=>{
    return <div>I`m Child 2</div>
})