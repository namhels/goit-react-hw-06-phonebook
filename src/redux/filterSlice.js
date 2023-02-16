import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { filter: '' },
  reducers: {
    valueFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { valueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
