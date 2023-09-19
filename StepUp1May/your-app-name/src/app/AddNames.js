import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const AddNames = () => {
    const dispatch=useDispatch()
    const storeData=useSelector((store)=>store)
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
        <ol>
        {
            names?.map((name,i)=>{
             return <li key={name+i}>{name}</li>
            })
        }
        </ol>
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
