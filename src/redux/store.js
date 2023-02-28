import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./User"
//useReducer is a userdefind name to get all from User.js
export const Store = configureStore({
    reducer : {
    fuser : userReducer
    }
})