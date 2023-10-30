import React, { useEffect } from 'react'
import { useState } from 'react'

export const Ajax = () => {
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        return res.json()
        }).then((data)=>setPosts(data))
    })
  return (
    <div>{
        posts?.slice(0,2)?.map((obj)=>{
           return <h1>{obj.title}</h1>
        })
        }</div>
  )
}
