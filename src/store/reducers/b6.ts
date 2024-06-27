import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  language: "en",
};

const languageReducer = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "en" ? "vn" : "en";
    },
  },
});

export const { toggleLanguage } = languageReducer.actions;
export default languageReducer.reducer;