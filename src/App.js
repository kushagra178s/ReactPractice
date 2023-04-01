import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact' 
import ConstactList from './components/ContactList';
import { useState } from 'react';
export default function App() {
  const [contacts, setContacts] = useState([]);
  const Contacts = []
  return (
    <div className='ui Container' style={{'margin':'10px'}}>
      <Header/>
      <AddContact/>
      <ConstactList contacts = {contacts} />
    </div>
  );
}