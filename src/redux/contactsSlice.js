import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    logIn(state, action) {
      state.login = action.payload;
      state.isLoggedIn = true;
    },
    logOut(state) {
      state.login = '';
      state.isLoggedIn = false;
    },
  },
});

export const { logIn, logOut } = contactsSlice.actions;
