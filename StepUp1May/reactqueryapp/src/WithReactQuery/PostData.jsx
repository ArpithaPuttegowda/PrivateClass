import React from 'react'
import usePostsQuery from '../CustomHook/useClientServices'

export const PostsData = () => {
  const { data, isLoading, isError, error } = usePostsQuery()

  if(isError){
    return `${error}...something went wrong`
  }
  if(isLoading){
    return "Loading"
  }
  return (
    <div> {data?.map((todo) => (
        <h1 key={todo.id}>{todo.id}</h1>
      ))}</div>
  )
}
