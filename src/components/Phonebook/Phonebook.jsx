import ContactForm from '../ContactForm/ContactForm';
import { useState, useEffect } from 'react';
import * as storage from '../../services/LocalStorage';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

// const Phonebook = () => {
//   const [contacts, setContacts] = useState([
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ]);
//   const [filter, setFilter] = useState('');

// componentDidMount() {
//   const savedContacts = storage.get('contacts');
//   if(savedContacts){this.setState({ contacts: savedContacts })};
// }

// useEffect(() => {
//   const savedContacts = storage.get('contacts');
//   if (savedContacts) {
//     setContacts({ contacts: savedContacts });
//   }
//   return;
// }, []);

const Phonebook = () => {
  const [contacts, setContacts] = useState(
    () =>
      storage.get('contacts') ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
  );
  const [filter, setFilter] = useState('');

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     storage.save('contacts', this.state.contacts);
  //   }
  // }

  // useEffect(() => {
  //   if (prevState.contacts !== contacts) {
  //     setContacts('contacts', contacts);
  //   }
  //   return;
  // }, [contacts]);

  useEffect(() => {
    storage.save('contacts', contacts);
  }, [contacts]);

  const addNewContact = newContact => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase(),
    );
    if (isDuplicate) {
      return alert(`${newContact.name} is already in contacts`);
    }
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleDelete = idToDelete => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== idToDelete),
    );
  };

  const getFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  const filterContacts = getFilterContacts();

  return (
    <div>
      <div>
        <h1>Phonebook</h1>
        <ContactForm addNewContact={addNewContact} />
        <h2>Contacts</h2>
        <Filter filter={filter} handleChange={handleChange} />
      </div>
      {filterContacts.length > 0 && (
        <ContactList
          filterContacts={filterContacts}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Phonebook;
