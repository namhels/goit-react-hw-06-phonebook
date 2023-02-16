import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    valueFilter(state, action) {
      state = action.payload;
    },
  },
});

export const { valueFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
