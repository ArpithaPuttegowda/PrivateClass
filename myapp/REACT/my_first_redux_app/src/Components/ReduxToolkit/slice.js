import {createSlice} from "@reduxjs/toolkit";

const nameLocRed = createSlice({
  name: "nameLoc",
  initialState: {
    name: "",
    loc: ""
  },
  reducers: {
    setName: (state, action) => {
      console.log(action, "action");
      state.name = action.payload;
    },
    setLoc: (state, action) => {
      state.loc = action.payload;
    }
  }
});

export const {setName, setLoc} = nameLocRed.actions;

export default nameLocRed.reducer;
