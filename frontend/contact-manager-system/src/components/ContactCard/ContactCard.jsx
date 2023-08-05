import React from "react";
import "./ContactCard.css";
import axios from "axios";

const ContactCard = ({ name, phone_number, latitude, longitude,id }) => {
  const Delete = () => {
    axios.delete(`http://127.0.0.1:8000/api/deleteContact/${id}`)
      .then(response => {
        console.log('Contact deleted successfully', response.data);
      })
      .catch(error => console.log(error));
    
  };
  return (
    <div className="flex">
      <p>{name}</p>
      <p>{phone_number}</p>
      <p>{latitude}</p>
      <p>{longitude}</p>
      <button onClick={Delete}>Delete Contact</button>
    </div>
  );
};

export default ContactCard;