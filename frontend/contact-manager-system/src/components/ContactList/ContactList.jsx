import "./ContactList.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from "../ContactCard/ContactCard";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/getContacts')
      .then(response => setContacts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        // <ContactCard key={contact.id} contact={contact} />
        <ContactCard 
        name={contact.name}
        phone_number={contact.phone_number}
        latitude={contact.latitude}
        longitude={contact.longitude} />
      ))}
    </div>
  );
};

export default ContactList;

