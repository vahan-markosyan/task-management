import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IState, IStatus, ITask, IUpdateAction } from "./types";
import { getTasks } from "./tasks.api";
import { useEffect } from "react";

const initialState:IState = {
    tasks:[]
}

export const taskSlice = createSlice({
    name:"tasks",
    initialState,
    reducers:{
        updateTask : (state:IState, action:PayloadAction<IUpdateAction>) => {
            const task = state.tasks.find(task => task.id === action.payload.id)
            if(task) {
                task.status = action.payload.status
            }
        }
    },
    extraReducers: builder => {
        builder
        .addCase(getTasks.fulfilled, (state, action) => {
            state.tasks = action.payload
        })
    }
    
})

export const reducer = taskSlice.reducer
export const {updateTask} = taskSlice.actions