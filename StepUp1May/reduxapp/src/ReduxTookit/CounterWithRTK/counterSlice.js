import { createSelector, createSlice } from "@reduxjs/toolkit";


const initialState={
    count:0
}

const counter=createSlice({
    name:"counter",
    initialState,
    reducers:{
       setInc:(state,action)=>{
        state.count=state.count+action.payload
       } ,
       setDec:(state,action)=>{
        state.count=state.count-action.payload
       },
       setReset:(state,action)=>{
        state.count=action.payload
       }
    }
})

export const {setInc,setDec,setReset}=counter.actions

export default counter.reducer;


 const selectSelf=(state)=>state;

 export const getCount=createSelector(selectSelf,({counterRedRTK})=>counterRedRTK.count)
