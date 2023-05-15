import React from 'react'
import { useDispatch } from 'react-redux'
import { userAction } from '../../Actions/userAction-thunkAction'

export const Users = () => {
    const dispatch = useDispatch()
    const handleUsers = () => {
        dispatch(userAction())
    }
    return (
        <div>
            <button onClick={handleUsers}>Users</button>

        </div>
    )
}
