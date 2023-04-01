import React from "react";
import ContactCard from "./ContactCard";
export default function ConstactList( props) {
    // console.log(props);
    const renderConstactsList = props.contacts.map((contact) => {
        return (
            <ContactCard contact={contact}/>
        )
    })
    return (
        <div className="ui called list" style={{'margin':'20px 0'}}>
            {renderConstactsList}
        </div>
    )
}