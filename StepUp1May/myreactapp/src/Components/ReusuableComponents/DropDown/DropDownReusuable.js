import React from 'react'

export const DropDownReusuable = ({data,title}) => {
  return (
    <p><h1>{title}</h1>
        <select>
        {
        data?.map((v,i)=>{
           return <option key={v+i}>{v}</option>
        })
        }
        </select></p>
  )
}
