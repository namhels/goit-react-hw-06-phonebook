import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ContactList.Styled';
import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts, onDeleteContact, children }) => (
  <List>
    {children}
    {contacts.map(({ id, name, number }) => (
      <ContactItem
        key={id}
        name={name}
        number={number}
        onDeleteContact={() => onDeleteContact({ id, name })}
      ></ContactItem>
    ))}
  </List>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
