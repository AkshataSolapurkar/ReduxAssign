import { configureStore } from "@reduxjs/toolkit"
import { todosSlice } from "../features/todo";
export const store = configureStore({
    reducer : todosSlice.reducer
})