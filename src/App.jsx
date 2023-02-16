// import { useState } from 'react';
// import { useState, useEffect } from "react";
// import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import { save, get } from 'utils';
// import useLocalStorage from 'hooks/useLocalStorage';
import { getContacts, getFilter } from 'redux/selectors';
import { addContact, deleteContact } from 'redux/contactsSlice';
import { valueFilter } from 'redux/filterSlice';
import Box from 'components/Box';
import { Headline } from 'components/Title';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import Form from 'components/Form';
import FormFormik from 'components/Formik';

// const CONTACTS_KEY = 'contacts';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  // ======<<< with custom hook useLocalStorage >>>========
  // const [contacts, setContacts] = useLocalStorage(CONTACTS_KEY, []);
  // const [filter, setFilter] = useState('');

  // ======<<< alternative >>>=============
  // ======<<< lazy load state initialization >>>=============
  // const [contacts, setContacts] = useState(() => get(CONTACTS_KEY) ?? []);

  // useEffect(() => {
  //   save(CONTACTS_KEY, contacts);
  // }, [contacts]);

  const addContacti = (name, number) => {
    // const contact = {
    //   id: nanoid(),
    //   name,
    //   number,
    // };
    if (contacts.find(el => el.name === name)) {
      toast.error(`${name} is already in contacts`);
      return;
    }
    dispatch(addContact(name, number));
    // setContacts(prevContacts => [contact, ...prevContacts]);
    toast.success(`${name} was added to contacts`);
  };

  const changeFilter = e => {
    dispatch(valueFilter(e.currentTarget.value));
    // setFilter(e.currentTarget.value);
  };

  // console.log(getContacts);
  // console.log(useSelector(getContacts));
  // console.log(contacts);
  // console.log(filter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacti = ({ id, name }) => {
    dispatch(deleteContact(id));
    // setContacts(prevContacts =>
    //   prevContacts.filter(contact => contact.id !== id)
    // );
    toast.warn(`${name} was deleted from contacts`);
  };

  return (
    <Box
      p={5}
      backgroundImage="linear-gradient(45deg, rgb(0, 219, 222), rgb(252, 0, 255))"
    >
      <Box
        bg="backgroundPrimary"
        boxShadow="small"
        borderRadius={8}
        p={5}
        maxWidth="435px"
        mx="auto"
      >
        <Headline HeadlineLogo>Phonebook</Headline>
        <FormFormik onSubmit={addContacti}></FormFormik>
        <Headline>Contacts</Headline>
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContacti}
        >
          <Filter value={filter} onChange={changeFilter} />
        </ContactList>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Box>
  );
};

export default App;

// {id: 'id-1', name: 'Howard Roark', number: '459-12-56'},
// {id: 'id-2', name: 'Dominique Francon', number: '443-89-12'},
// {id: 'id-3', name: 'John Galt', number: '645-17-79'},
// {id: 'id-4', name: 'Dagny Taggart', number: '888-88-88'},
