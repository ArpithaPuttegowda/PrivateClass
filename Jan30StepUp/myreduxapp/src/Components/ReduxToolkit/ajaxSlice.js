import { createSlice, createSelector } from "@reduxjs/toolkit";

const initData = {
  comments: [],
};

const ajaxReducer = createSlice({
  name: "ajax",
  initialState: initData,
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    },
  },
});
export const { setComments } = ajaxReducer.actions;

const selectSelf = (state) => state;
export const getComments = createSelector(
  selectSelf,
  ({ ajaxRTK }) => ajaxRTK.comments
);

export default ajaxReducer.reducer;
