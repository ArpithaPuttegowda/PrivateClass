import React from 'react'

export const GenericH1 = ({data}) => {
  return (
    <div>{
        Object.entries(data)?.map((arr)=>{
           return <h1>
            <b>{arr[0]}::</b><span>{arr[1]}</span>
           </h1>
        })
        }</div>
  )
}
