import {useState,useEffect} from 'react'
import Form from './Form'
import List from './List'
import {} from './style.css'

function Contacts() {
    const [contacts, setContacts]= useState([]);
    useEffect(()=>{console.log(contacts)},[contacts])
    return (
    <div id="container">
      <List contacts= {contacts} />
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
    )
}

export default Contacts
