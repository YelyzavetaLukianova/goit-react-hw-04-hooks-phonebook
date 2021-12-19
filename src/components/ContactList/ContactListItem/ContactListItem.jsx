import React from 'react';
import PropTypes from 'prop-types';
import './ContactListItem.css';

function ContactListItem(props) {
  return (
    <li className="ContactListItem">
      <p className="ContactListItem__Name">Name: {props.contact.name}</p>
      <p className="ContactListItem__Name">Number: {props.contact.number}</p>
      <button
        className="ContactListItem__btn"
        type="button"
        onClick={() => props.handleDelete(props.contact.id)}
      >
        Delete contact
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  handleDelete: PropTypes.func,
};

export default ContactListItem;
