import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{
        id: nanoid(),
        text: "Demo Todo"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // state represents the current state of the slice (or the specific part of the Redux store this reducer is managing). The reducer modifies the state based on the action.
        // action is an object that contains information about the event that occurred. It typically has two properties: type → A string that defines the type of action (e.g., "removeTodo"). payload → Any additional data needed for the action. In this case, it contains the id of the todo to be removed.
        addTodo: (state, action) => {
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
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id)
            if (todo) todo.text = text;
        }
    }
})

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;