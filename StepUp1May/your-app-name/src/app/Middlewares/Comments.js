import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { commentsAction } from '../actions/commentsAction'
import { postAction } from '../actions/postsAction'
import store from '../Redux/store'

export const AjaxComments = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
  // commentsAction(store.dispatch)
  commentsAction(dispatch)
  },[])

  useEffect(()=>{
    // postAction(store.dispatch)
    postAction(dispatch)
  },[])
  return (
    <div>comments...</div>
  )
}
