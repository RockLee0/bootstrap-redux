import type { RootState } from "@/redux/store";
import type { IUser } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";

export interface InitialState2{
    users : IUser[]
}

const initialState:InitialState2 = {
users:[]
}

export type draftUser = Pick<IUser, "name" >

const createDraft = (data: draftUser):IUser=>{
    const id = nanoid()
    const userData = {id, ...data}
    return userData
}
export const userSlice = createSlice ({
    name: "user",
    initialState, 
    reducers:{
        addUser: (state, action:PayloadAction<draftUser>)=>{
            const userData = createDraft(action.payload)
            state.users.push(userData)
        },
        deleteUser: (state, action:PayloadAction<string>)=>{
            state.users=state.users.filter(user=>user.id!=action.payload)
        }
    }
})

export const selectUsers = (state: RootState) => state.user.users;

export const {addUser,deleteUser}=userSlice.actions;


export default userSlice.reducer;