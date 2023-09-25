import { createSlice } from "@reduxjs/toolkit";

const initialState={
    name:"JOHN",
    count:10
}

const changeName=createSlice({
    name:"Change_Name",
    initialState:initialState,
    reducers:{
        setChangeName:(state,action)=>{
       state.name=action.payload
        },
        setCount:(state,action)=>{
         state.count=action.payload
        }
    }
})

export const {setChangeName,setCount}=changeName.actions

export default changeName.reducer