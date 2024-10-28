import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getTasks = createAsyncThunk("tasks/get", async() => {
    const response = await axios.get("http://localhost:3004/tasks")
    return response.data
})