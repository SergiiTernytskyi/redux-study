// Vanila Redux

// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducers';
// const enchancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enchancer);

//Redux toolkit

import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import { tasksReducer } from './taskSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filterReducer,
  },
});
