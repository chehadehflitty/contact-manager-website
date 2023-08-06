import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import "./styles/App.css";
import ContactList from "./components/ContactList/ContactList";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    
      <div className="flex">
        <ContactForm setContacts={setContacts} contacts={contacts} />
        <ContactList setContacts={setContacts} contacts={contacts} />
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        


      </div>
      
  
  );
};

export default App;