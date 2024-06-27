import { createSlice } from "@reduxjs/toolkit";

const themeState: boolean = true;
const themeReducer = createSlice({
  name: "themeReducer",
  initialState: themeState,
  reducers: {
    themeChange: (state) => (state = !state),
  },
});
export const { themeChange } = themeReducer.actions;
export default themeReducer.reducer;