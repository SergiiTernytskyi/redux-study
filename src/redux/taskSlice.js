import { addTask, deleteTask, fetchTasks, toggleComplete } from './operations';

const { createSlice } = require('@reduxjs/toolkit');

const pendingHandler = state => {
  state.isLoading = true;
};

const rejectedHandler = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchTasks.pending]: pendingHandler,
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected]: rejectedHandler,

    [addTask.pending]: pendingHandler,
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addTask.rejected]: rejectedHandler,

    [deleteTask.pending]: pendingHandler,
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1);
    },
    [deleteTask.rejected]: rejectedHandler,

    [toggleComplete.pending]: pendingHandler,
    [toggleComplete.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
    [toggleComplete.rejected]: rejectedHandler,
  },
});

export const tasksReducer = taskSlice.reducer;
