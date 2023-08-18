import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import ContactItem from '../ContactItem/ContactItem';

const getFilteredContacts = (contacts, filter) => {
  const normalizedFilter = filter ? filter.toLowerCase() : '';
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} contact={{ id, name, number }} />
      ))}
    </ul>
  );
};

export default ContactList;