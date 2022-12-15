import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setAuth } from "./authSlice";



const initialState={
   initializeApp:false
}

const initializeSlice = createSlice({
   name:"initialize",
   initialState,
   reducers:{
      initializeAppAc:(state)=>{
         state.initializeApp=true
      }
   }
}) 

export const setInitializeApp=createAsyncThunk(
   "initialize/set",
   async(_,{dispatch})=>{
      const promise= dispatch(setAuth())
      promise.then(()=>{
         dispatch(initializeAppAc())
      })
   }
)


export const {initializeAppAc}=initializeSlice.actions
export default initializeSlice.reducer