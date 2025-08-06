import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";


export interface InitialState {
    tasks: ITask[],
    filter: "High" | "Low" | "Medium" | "All"
}

const initialState: InitialState ={
tasks: [],
filter: "High"
}

export type draftTask = Pick<ITask, "title" | "description" | "priority" | "dueDate">
const createData = (data: draftTask ): ITask =>{
    return ({
        id: nanoid(),
        isCompleted: false,
        ...data
    })
}

export const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state,action: PayloadAction<draftTask>)=>{
           const taskData = createData(action.payload)
            state.tasks.push(taskData)
        },
        toggleCompleteState:(state,action:PayloadAction<string>)=>{
            state.tasks.forEach(task=>task.id==action.payload?task.isCompleted=true:task)
        },
        deleteTask: (state,action: PayloadAction<string>)=>{
            state.tasks=state.tasks.filter(task=> task.id != action.payload)
        },
        updateFilter: (state,action: PayloadAction<"All" | "Low" | "Medium" | "High">) =>{
            state.filter= action.payload
        }

    }
})

export const selectTasks = (state:  RootState) =>{
    return state.todo.tasks
}
export const selectFilter = (state:  RootState) =>{
    console.log(state)
    return state.todo.filter
}


export const {addTask,toggleCompleteState,deleteTask,updateFilter} = taskSlice.actions;

export default taskSlice.reducer;