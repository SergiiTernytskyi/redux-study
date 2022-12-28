import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// export const addTask = text => {
//   return {
//     type: 'task/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'task/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'task/toggleCompleted',
//     payload: taskId,
//   };
// };

// export const setStatusFilter = value => {
//   return {
//     type: 'filter/setStatusFilter',
//     payload: value,
//   };
// };

export const addTask = createAction('task/addTask', text => {
  return {
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});
export const deleteTask = createAction('task/deleteTask');
export const toggleCompleted = createAction('task/toggleCompleted');
export const setStatusFilter = createAction('filter/setStatusFilter');
