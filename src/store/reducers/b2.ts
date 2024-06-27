import { createSlice } from "@reduxjs/toolkit";

const arrRandomState: number[] = [];
const arrRandomReducer = createSlice({
  name: "arrRandomReducer",
  initialState: arrRandomState,
  reducers: {
    addRandom: (state) => {
      return [...state, Math.floor(Math.random() * 100)];
    },
  },
});
export const { addRandom } = arrRandomReducer.actions;
export default arrRandomReducer.reducer;