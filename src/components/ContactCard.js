import React from "react";
const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className="item">
      <hr />
      <img className="ui avatar image" src='https://cdn-icons-png.flaticon.com/512/236/236832.png?w=740&t=st=1680431384~exp=1680431984~hmac=c333c448e76cc02b3afcc75ce6cb698c8be672d3de5792a2629bf5ae87718fb9' alt="user" />
      <div className="content" style={{padding:'10px'}}>
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHander(id)}
      ></i>
    </div>
  );
};

export default ContactCard;