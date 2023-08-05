import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import "./styles/App.css";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      name: "walid",
      phone_number: "+96170123456",
      latitude: 13,
      longitude:12,
    },
    {
      name: "sarah",
      phone_number: "+96170321654",
      latitude: 14,
      longitude:18,
    },
    
  ]);

  return (
    <div className="flex">
      {/* <ContactForm setContacts={setContacts} contacts={contacts} />
      <ContactList contacts={contacts} /> */}
      
    </div>
  );
};

export default App;