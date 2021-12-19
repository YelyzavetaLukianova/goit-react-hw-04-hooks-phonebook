import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem/ContactListItem';
import './ContactList.css';

function ContactList({ filterContacts, handleDelete }) {
  return (
    <ul className="ContactList">
      {filterContacts.map(contact => (
        <ContactListItem
          contact={contact}
          key={contact.id}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  filterContacts: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ContactList;
