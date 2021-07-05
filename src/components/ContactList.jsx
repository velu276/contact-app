import React, {Component} from 'react';
import ContactCard from './ContactCard';

class ContactList extends Component{

    render(){
        return(
            <div className="container mt-5 mb-5">
                <h3>Contact List</h3>
                <ul className="list-group">
                    {this.props.contacts.map(contact => 
                        <ContactCard contact = {contact} />
                    )}
                </ul>
            </div>
            
        );
    }
};

export default ContactList;