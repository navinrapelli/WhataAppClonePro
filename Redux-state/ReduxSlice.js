import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const initialState=[];

const ChatSlice=createSlice({
    name:"ChatApp",
    initialState,
    reducers:{

       addChat:(state,action)=>{
           state.push(action.payload)
       },

       deleteChat:(state,action)=>{
           state.slice(action.payload,1);
       }
    }

})

export default ChatSlice.reducer;
export const addChat=ChatSlice.actions.addChat;
export const deleteChat=ChatSlice.actions.deleteChat;