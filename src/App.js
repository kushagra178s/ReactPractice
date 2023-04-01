import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact' 
import ConstactList from './components/ContactList';
import { useState } from 'react';
export default function App() {
  const [contacts, setContacts] = useState([]);
  return (
    <div className="Container">
      <Header/>
      <AddContact/>
      <ConstactList contacts = {contacts} />
    </div>
  );
}