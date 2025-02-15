import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

// each application has single store - single source of truth
// we need to import all the reducer in main.jsx
export const store = configureStore({
    reducer: todoReducer
})