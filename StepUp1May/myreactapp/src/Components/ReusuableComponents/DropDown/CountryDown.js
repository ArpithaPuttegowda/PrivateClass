import React from 'react'

export const CountryDown = () => {
    const countries=["India","Pak","China"]
  return (
    <div><select>{
        countries.map((v,i)=>{
         return <option key={v+i}>{v}</option>
        })
        }</select></div>
  )
}
