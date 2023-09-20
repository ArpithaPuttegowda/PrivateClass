import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { commentsAction } from '../actions/commentsAction'

export const AjaxComments = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
  commentsAction(dispatch)
  },[])
  return (
    <div>comments...</div>
  )
}
