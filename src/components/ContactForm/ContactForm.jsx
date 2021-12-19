import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import './ContactForm.css';

const ContactForm = ({ addNewContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    addNewContact({ name, number, id: nanoid(10) });
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="ContactForm">
        <div className="ContactForm__div">
          <label className="ContactForm__form__label" htmlFor="text">
            Contact
          </label>
          <input
            className="ContactForm__form__input"
            label="last"
            type="text"
            name="name"
            id="text"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="ContactForm__div">
          <label className="ContactForm__form__label" htmlFor="tel">
            Phone Number
          </label>
          <input
            className="ContactForm__form__input"
            type="tel"
            name="number"
            id="tel"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={e => setNumber(e.target.value)}
          />
        </div>
        <button className="ContactForm__form__btn" type="submit">
          Add contact
        </button>
      </form>
    </>
  );
};

export default ContactForm;
