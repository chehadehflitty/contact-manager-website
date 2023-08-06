import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import "./styles/App.css";
import ContactList from "./components/ContactList/ContactList";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
      <div className="flex">
        <ContactForm setContacts={setContacts} contacts={contacts} />
        <ContactList setContacts={setContacts} contacts={contacts} />
      </div> 
  );
};

export default App;