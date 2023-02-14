import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from './ContactItem.Styled';

const ContactItem = ({ name, number, onDeleteContact }) => {
  return (
    <Item>
      <p>{name}: {number}</p>
      <Button
        type="button"
        onClick={onDeleteContact}
      >
        delete
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
   name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;