import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{ id: nanoid(), text: "Demo Todo" }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {  // state - current state, action - data that is being passed
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // updateTodo
        updateTodo: (state, action) => {
            // action does not contain id and text directly. action is an object, and the correct way to access payload is action.payload.
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id)
            if (todo) todo.text = text;
        }
    }
})

export const { addTodo, removeTodo,updateTodo } = todoSlice.actions;
export default todoSlice.reducer;