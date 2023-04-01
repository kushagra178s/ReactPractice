import React from "react";
export default function ContactCard(props) {
    const {id, name, email} = props.contact;
    return (
        <div className="item">
            <img src={'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg&ga=GA1.2.985558126.1672679171&semt=sph'} width='20px' alt="user" className="ui avatar image" />
            <div className="content">
                <div className="header">
                    {name}
                </div>
                <div>{email}</div>
            </div>
            <button className="trash alternate outline icon">delete</button>
        </div>
    )
}