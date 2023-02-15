import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    user: contactsSlice.reducer,
  },
});
