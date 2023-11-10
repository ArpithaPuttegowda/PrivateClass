import React, { useState } from 'react'
import { useCommenstsQuery } from '../CustomHook/useClientServices'

export const GetComments = () => {
    const [isGetComment,setIsGetComment]=useState(false)
    const {data,isLoading,isError} =useCommenstsQuery(isGetComment)
    const handleComments=()=>{
        setIsGetComment(true)
    }
  return (
    <div>
        <button onClick={handleComments}>Get Comments</button>
    </div>
  )
}
