import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';

// each application has single store - single source of truth
export const store = configureStore({
    reducer: todoReducer
})