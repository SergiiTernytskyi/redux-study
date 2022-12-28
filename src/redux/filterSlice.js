const { createSlice } = require('@reduxjs/toolkit');
const { statusFilters } = require('./constants');

const filtersInitialState = {
  status: statusFilters.all,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter: (state, action) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const { setStatusFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
