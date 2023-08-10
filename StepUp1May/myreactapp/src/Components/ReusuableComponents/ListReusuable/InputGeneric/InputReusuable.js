import React from 'react'

export const InputReusuable = ({lbl,type}) => {
  return (
    <p><b>{lbl}:</b><input type={type}/></p>
  )
}
