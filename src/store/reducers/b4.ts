import { createSlice } from "@reduxjs/toolkit";

const displayState: boolean = true;
const displayReducer = createSlice({
  name: "displayReducer",
  initialState: displayState,
  reducers: {
    displayChange: (state) => (state = !state),
  },
});

export const { displayChange } = displayReducer.actions;
export default displayReducer.reducer;