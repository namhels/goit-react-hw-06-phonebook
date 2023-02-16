import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const contacts = [
//   // { id: 'id-1', name: 'Howard Roark', number: '459-12-56' },
//   // { id: 'id-2', name: 'Dominique Francon', number: '443-89-12' },
//   // { id: 'id-3', name: 'John Galt', number: '645-17-79' },
//   // { id: 'id-4', name: 'Dagny Taggart', number: '888-88-88' },
// ];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.contacts = [action.payload, ...state.contacts];
        // return [action.payload, ...state];
        // return state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      // const index = state.findIndex(el => el.id === action.payload);
      // state.splice(index, 1);
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
// export const getContacts = state => state.contacts;
