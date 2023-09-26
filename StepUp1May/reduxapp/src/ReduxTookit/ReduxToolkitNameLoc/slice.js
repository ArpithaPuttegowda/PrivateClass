import { createSlice } from "@reduxjs/toolkit";


const initialState={
    name:"",
    loc:""
}

const nameLoc=createSlice({
    name:"name_loc",
    initialState,
    reducers:{
        setName:(state,action)=>{
         state.name=action.payload
        },
        setLoc:(state,action)=>{
            state.loc=action.payload
        }
    }
})

export const {setName,setLoc}=nameLoc.actions

export default nameLoc.reducer