import React, { useEffect } from 'react'
import { useState } from 'react'

export default function LifeCycleFunctionalUnMounting() {
    const [isChild,setIsChild]=useState(true)
    const handleToggle=()=>{
        setIsChild(!isChild)
    }
   
  return (
    <div>
       {
        isChild && <Child/>
       } 
       <button onClick={handleToggle}>Toggle</button>
    </div>
  )
}

const Child=()=>{
    useEffect(()=>{
        return ()=>{
            alert("called when component will be unmounting from the DOM")
        }
    },[])
    return <h1>I'm Child</h1>
}
