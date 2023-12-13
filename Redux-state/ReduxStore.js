import { configureStore} from "@reduxjs/toolkit";
import ChatAppReducer from "./ReduxSlice"

export const ChatStore=configureStore({
     reducer:{
        ChatStoreState:ChatAppReducer,
     },
     
})