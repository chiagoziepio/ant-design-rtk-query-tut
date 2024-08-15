import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    usersTable: []
}

export const userSlice = createSlice({
    name: "userTable",
    initialState,
    reducers:{
        addUser: (state,action)=>{
            const year = action.payload.dob.$y
            const day = action.payload.dob.$D
            const month = action.payload.dob.$M
            const dob = `${day}/${month}/${year}`
            const newUser = {
                id: nanoid(),
                name: action.payload.fullname,
                username: action.payload.username,
                dob,
                email : action.payload.email,
                cartItems : [],
            }
            state.usersTable.push(newUser)
            
        },
        DeleteUser: (state, action)=>{
            state.usersTable = state.usersTable.filter(user=> user.id !== action.payload)
        }
    }
})

export const { addUser, DeleteUser } = userSlice.actions
export default userSlice.reducer