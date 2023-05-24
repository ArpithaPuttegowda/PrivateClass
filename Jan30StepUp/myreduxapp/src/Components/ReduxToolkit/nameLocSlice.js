import { createSlice, createSelector } from "@reduxjs/toolkit";

const initData = {
  name: "",
  loc: "",
};
const nameLocReducer = createSlice({
  name: "nameLoc",
  initialState: initData,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setLoc: (state, action) => {
      state.loc = action.payload;
    },
  },
});
export const { setName, setLoc } = nameLocReducer.actions;

const selectSelf = (state) => state;

export const getName = createSelector(selectSelf, ({ nlRTK }) => nlRTK.name);

export const getLoc = createSelector(selectSelf, ({ nlRTK }) => nlRTK.loc);

export default nameLocReducer.reducer;
