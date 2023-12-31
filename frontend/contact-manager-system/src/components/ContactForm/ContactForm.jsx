import React, { useState } from 'react';
import axios from 'axios';
import"./ContactForm.css"

const ContactForm = () => {
  const [contacts, setContacts] = useState({
    name: '',
    phone_number: '',
    latitude: '',
    longitude: ''
  });

  const change = e => {
    const { name, value } = e.target;
    setContacts({ ...contacts, [name]: value });
  };

  const submit = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/putContact', contacts)
      .then(response => {
        console.log('Contact added successfully', response.data);

      })
      .catch(error => console.log(error));
  };

  return (
    <form className="contact_inputs" onSubmit={submit}>
      <input type="text" name="name" className='input' placeholder="Name" value={contacts.name} onChange={change} />
      <input type="text" name="phone_number" className='input' placeholder="Phone Number" value={contacts.phone_number} onChange={change} />
      <input type="text" name="latitude" className='input' placeholder="Latitude" value={contacts.latitude} onChange={change} />
      <input type="text" name="longitude" className='input' placeholder="Longitude" value={contacts.longitude} onChange={change} />
      <button type="submit" className='add'>Add Contact</button>
    </form>
  );
};

export default ContactForm;
