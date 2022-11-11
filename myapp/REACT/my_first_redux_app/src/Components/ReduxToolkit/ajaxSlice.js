import {createSlice} from "@reduxjs/toolkit";
import {ajax} from "./constant";

const initialState = {
  data: []
};

const ajaxRed = createSlice({
  name: ajax,
  initialState: initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    }
  }
});
export const {setData} = ajaxRed.actions;
export default ajaxRed.reducer;
