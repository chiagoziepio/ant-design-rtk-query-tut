import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signedIn :  []
}

export  const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        getSignedInuser : (state, action) =>{
            state.signedIn = action.payload
        }
    }
})

export const {getSignedInuser} = loginSlice.actions;

export default loginSlice.reducer