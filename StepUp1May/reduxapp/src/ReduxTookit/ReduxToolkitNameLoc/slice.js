import { createSelector, createSlice } from "@reduxjs/toolkit";


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


const selectSelf = (state) => state;

export const getName = createSelector(
    selectSelf,
  ({  nameLocRedRTK}) =>  nameLocRedRTK.name
);

export const getLoc = createSelector(
    selectSelf,
  ({  nameLocRedRTK}) =>  nameLocRedRTK.loc
);



export default nameLoc.reducer