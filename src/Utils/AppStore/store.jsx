import { configureStore } from "@reduxjs/toolkit";
import UserTableReducer from "../features/Users/userSlice";

const store = configureStore({
    reducer:{
        userTable : UserTableReducer
    }
})

export default store