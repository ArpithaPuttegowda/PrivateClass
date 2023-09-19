import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const AddNames = () => {
    const dispatch=useDispatch()
    const storeData=useSelector((store)=>store)
    console.log(storeData,"storeData")
    const nameRef=useRef(null)
    const [names,setNames]=useState([])
    const addName=()=>{
     const name=nameRef?.current?.value;
     setNames([...names,name])
     dispatch({
        type:"NAME",
        payload:name
     })
    }
  return (
    <div>
        <input ref={nameRef}/>
        <button onClick={addName}>Add Name</button>
        <h1>Local state useState</h1>
        <ol>
        {
            names?.map((name,i)=>{
             return <li key={name+i}>{name}</li>
            })
        }
        </ol>
        <h1>Global state redux</h1>
        <ul>
        {
           storeData?.namesRed?.names?.map((name,i)=>{
             return <li key={name+i}>{name}</li>
            })
        }
        </ul>
    </div>
  )
}
