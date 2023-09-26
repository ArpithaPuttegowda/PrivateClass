import { createSlice } from "@reduxjs/toolkit";
import { REDUX_KEYS } from "./constants";

const initData={
    name:"JOHN",
    count:0
}

const nameChange=createSlice({
    initialState:initData,
    name:REDUX_KEYS.CHANGE_NAME,
    reducers:{
        setChangeName:(state,action)=>{
            state.name=action.payload
        },
        setCount:(state,action)=>{
           state.count=action.payload
        }
    }
})

export const {setChangeName,setCount}=nameChange.actions

export default nameChange.reducer