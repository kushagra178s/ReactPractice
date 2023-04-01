import React from "react";
import ContactCard from "./ContactCard";
export default function ConstactList( props) {
    // console.log(props);
    const renderConstactsList = props.contacts.map((contact) => {
        return (
            <ContactCard contact = {contact}> </ContactCard>
        )
    })
    return (
        <div className="ui celled list" >
            {renderConstactsList}
        </div>
    );
}