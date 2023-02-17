import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { List } from './ContactList.Styled';
import ContactItem from 'components/ContactItem';

const ContactList = ({ children }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {children}
      {getVisibleContacts().map(contact => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </List>
  );
};

export default ContactList;
