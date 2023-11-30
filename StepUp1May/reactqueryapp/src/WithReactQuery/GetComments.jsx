import React, { useState } from 'react'
import { useCommenstsQuery } from '../CustomHook/useClientServices'

export const GetComments = () => {
    const [isGetComment,setIsGetComment]=useState(false)
    const {data,isLoading,isError,error} =useCommenstsQuery(isGetComment)
    const handleComments=()=>{
        setIsGetComment(true)
    }
  return (
    <div>
        <button onClick={handleComments}>Get Comments</button>
        {
          data?.map((obj)=>{
            return<div>{obj.email}</div>
          })
        }
    </div>
  )
}
