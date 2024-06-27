import { createSlice } from "@reduxjs/toolkit";

const countReducer=createSlice({
    name:"counter",
    initialState:{
        count:0
    },
    reducers:{
        increase:(state:any)=>{
             state.count+1
        },
        decrease:(state)=>{
            state.count-1
        }
    }
    
})
export const {increase,decrease} =countReducer.actions;

export default countReducer.reducer;