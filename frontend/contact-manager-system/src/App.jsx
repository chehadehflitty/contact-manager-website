import { useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import "./styles/App.css";
import ContactList from "./components/ContactList/ContactList";

const App = () => {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="flex">
      <ContactForm setContacts={setContacts} contacts={contacts} />
      <ContactList contacts={contacts} />
      
    </div>
  );
};

export default App;