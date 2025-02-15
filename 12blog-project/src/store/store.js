import { configureStore } from '@reduxjs/toolkit';
import authReduers from './authSlice';

const store = configureStore({
    reducer: {
        auth: authReduers
    },
    // add slices here for Posts
})

export default store;