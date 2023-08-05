import React from "react";
import "./ContactCard.css";

const ContactCard = ({ name, phone_number, latitude, longitude }) => {
  return (
    <div className="flex">
      <p>{name}</p>
      <p>{phone_number}</p>
      <p>{latitude}</p>
      <p>{longitude}</p>
    </div>
  );
};

export default ContactCard;