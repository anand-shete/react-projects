import { createContext, useContext } from 'react';

export const TodoContext = createContext({
    todo: [{
        id: 1,
        todo: "Complete a Task",
        completed: false
    }],
    // These function placeholders are just initial values. These functions do nothing by default but act as placeholders. When we define our own functions, we are overriding the placeholder function with real implementation.
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: () => { }
})

export const TodoProvider = TodoContext.Provider;

export function useTodo() {
    return useContext(TodoContext);
}