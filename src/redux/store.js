import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { tasksReducer } from './taskSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
  },
});
