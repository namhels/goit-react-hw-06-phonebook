import { useState } from 'react';
// import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
// import { save, get } from 'utils';
import useLocalStorage from 'hooks/useLocalStorage';
import Box from 'components/Box';
import { Headline } from 'components/Title';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
// import Form from 'components/Form';
import FormFormik from 'components/Formik';

const CONTACTS_KEY = 'contacts';

const App = () => {
  // ======<<< with custom hook useLocalStorage >>>========
  const [contacts, setContacts] = useLocalStorage(CONTACTS_KEY, []);
  const [filter, setFilter] = useState('');

  // ======<<< alternative >>>=============
  // ======<<< lazy load state initialization >>>=============
  // const [contacts, setContacts] = useState(() => get(CONTACTS_KEY) ?? []);

  // useEffect(() => {
  //   save(CONTACTS_KEY, contacts);
  // }, [contacts]);

  const addContact = (name, number) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    if (contacts.find(el => el.name === contact.name)) {
      toast.error(`${contact.name} is already in contacts`);
      return;
    }
    setContacts(prevContacts => [contact, ...prevContacts]);
    toast.success(`${contact.name} was added to contacts`);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = ({ id, name }) => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
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
        <FormFormik onSubmit={addContact}></FormFormik>
        <Headline>Contacts</Headline>
        <ContactList
          contacts={getVisibleContacts()}
          onDeleteContact={deleteContact}
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
