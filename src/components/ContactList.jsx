import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import ContactCard from './ContactCard';

class ContactList extends Component{

    render(){
        return(
            <div className="container mt-5 mb-5">
                <h3 className="mb-4">
                    Contact List
                    <Link to="/add">
                        <button className="btn btn-primary float-right">Add Contact</button>
                    </Link>
                </h3>
                <ul className="list-group">
                    {this.props.contacts.map(contact => 
                        <ContactCard key = {contact.id} contact = {contact} deleteContact = {this.props.deleteContact} />
                    )}
                </ul>
            </div>
            
        );
    }
};

export default ContactList;