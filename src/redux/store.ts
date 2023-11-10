// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import financialReducer from './financialSlice';

const store = configureStore({
    reducer: {
        financial: financialReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
