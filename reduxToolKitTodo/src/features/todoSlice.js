import { createSlice, nanoid } from "@reduxjs/toolkit";
import { text } from "body-parser";

const intialState = {
    todos:  [{id: 1, text: 'yadnyesh'}],
};

export const todoSlice = createSlice({
    name: 'todo',
    intialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid,
                text: action.payload,
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
})