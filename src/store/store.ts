import countReducer from "./reducers/countReducer";
import {  configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        countReducer,
    }
});
export default store;
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/b1";
import arrRandomReducer from "./reducers/b2";
import themeReducer from "./reducers/b3";
import displayReducer from "./reducers/b4";
import languageReducer from "./reducers/b6";
export const store = configureStore({
  reducer: {
    b1: countReducer,
    b2: arrRandomReducer,
    b3: themeReducer,
    b4: displayReducer,
    b6: languageReducer,
  },
});