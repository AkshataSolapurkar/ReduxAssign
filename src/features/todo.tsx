import { createSlice,nanoid,PayloadAction } from "@reduxjs/toolkit";

export type RootState = typeof initialState;
const initialState ={
    todo :[{id:1 ,text:"hello"}]
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers :{
        //addtodo is a prop
        addtodo: (state,action:PayloadAction<string>) => {
            const todos ={
                id:parseInt(nanoid()),
                text:action.payload
            }
            state.todo.push(todos)

        },
        remodetodo: (state,action:PayloadAction<number>)=>{
            state.todo = state.todo.filter(Todos => Todos.id !== action.payload )
        }
    } //this is properties and function where it take the functions and mutate according the props
})

export const {addtodo,remodetodo} = todosSlice.actions
export default todosSlice.reducer