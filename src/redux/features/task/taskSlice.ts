import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";


export interface InitialState {
    tasks: ITask[],
    filter: "High" | "Low" | "Medium" | "all"
}

const initialState: InitialState ={
tasks: [
    {
    id: " ad",
    title: " dfg",
    description: "dsdf",
    isCompleted: false,
    priority: "High"
},
{
    id: " adsdff",
    title: " sdfdfg",
    description: "dadsfdfsdf",
    isCompleted: false,
    priority: "Low"
}
],
filter: "High"



}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {

    }
})

export const selectTasks = (state:  RootState) =>{
    return state.todo.tasks
}
export const selectFilter = (state:  RootState) =>{
    return state.todo.filter
}

export default taskSlice.reducer