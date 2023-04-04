import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };
  // const contacts = [{ id: 1, name: "abcd", email: "yo@gmail.com" }];
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className="main">
      <hr />
      <h2 style={{textAlign : 'center'}}><u>Contact List</u></h2>
      <div className="ui celled list">{renderContactList}</div>
      {/* <button className="ui button blue right">Add Contact</button> */}
    </div>

  );
};

export default ContactList;
