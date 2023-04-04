import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { v4 as uuid } from "uuid";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    // console.log("here is add contact handler")
    // console.log(contact);
    var f1 = 0, f2 = 0 ;
    for (var i = 0; i < contacts.length; i += 1) {
      if (contacts[i].email === contact.email) {
        f1 = 1;
        alert("Email already exists with this name : " + contacts[i].name);
        break;
      }
      if (contacts[i].name === contact.name) {
        var j = prompt("name already exists in Contact List if u want to abort press any key or if add press 1" );
        if(j!=='1') {
          f2 = 1;
        }
      }
    }
    if (f1 === 0 && f2 === 0) {
      setContacts([...contacts, { id: uuid(), ...contact }]);
    }
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div >
      <div className="ui container" style={{ backgroundColor: "#4b5269" , padding:'10px'}}>
        <Header />
        <AddContact addContactHandler={addContactHandler} />
        <ContactList contacts={contacts} getContactId={removeContactHandler} />
      </div>
    </div>
  );
}
export default App;
