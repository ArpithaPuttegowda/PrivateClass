import React from 'react'

export const UserProfile = ({user,loc}) => {
  return (<>
    <h1>{user?.length}</h1>
    <p>{loc}</p>
    </>
  )
}
