import { memo, useCallback, useState } from "react"

export const ExampleOfUseCallBack = () => {
    const [count,setCount]=useState(0)
   const handleInc=()=>{
    setCount(count+1)
   }
   const data=useCallback(()=>{},[])
  return (
    <div><Child name={data}/>
    {
        alert("parent called")
    }
    <button onClick={handleInc}>Inc count {count}</button>
    </div>
  )
}


// eslint-disable-next-line react/prop-types
let Child=({name})=>{
    alert("child called")
    return <div>Child...{name}</div>
}

Child=memo(Child)