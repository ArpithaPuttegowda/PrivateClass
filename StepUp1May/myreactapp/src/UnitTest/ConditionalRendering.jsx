import React from 'react'

export const Message = ({isError}) => {
  return (
    <div>{isError && <span>An error occurred.</span>}</div>
  )
}
