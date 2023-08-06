import "./ContactList.css";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactCard from "../ContactCard/ContactCard";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/getContacts')
      .then(response => setContacts(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="contact_list">
      {contacts.map((contact) => (
        <ContactCard 
        name={contact.name}
        id={contact.id}
        phone_number={contact.phone_number}
        latitude={contact.latitude}
        longitude={contact.longitude}
         />
        
      ))}
      <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {contacts.map(contact => (
          <Marker key={contact.id} position={[contact.latitude, contact.longitude]}>
            <Popup>
              Name: {contact.name}<br />
              Phone: {contact.phone_number}
            </Popup>
          </Marker>
          ))}
        </MapContainer>
    </div>
  );
};

export default ContactList;



