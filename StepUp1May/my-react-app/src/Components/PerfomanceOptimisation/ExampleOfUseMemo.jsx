import { useMemo, useState } from "react"

 const ExampleOfUseMemo = () => {
    const [count,setCount]=useState(0)

    const delay=useMemo(()=>{
        for(let i=0;i<=5000000000;i++){ /* empty */ }
        return 10
    },[])
    
  return (
    <div>
        <h1>{delay}</h1>
        <button onClick={()=>setCount(count+1)}>Inc Count {count}</button>
    </div>
  )
}

export default ExampleOfUseMemo