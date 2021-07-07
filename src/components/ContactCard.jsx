import React, { Component } from 'react';
import { BsTrash } from "react-icons/bs";
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';


class ContactCard extends Component {

    render() {
        return (
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <Link to={{ pathname: `/contact/${this.props.contact.id}`, state: { contact: this.props.contact } }}>
                    <div className="container">
                        <div className="row">
                            <div className="col-auto p-0 mx-2">
                                <Avatar name={this.props.contact.name} size="40" round={true} className="m-0 p-0" />
                            </div>
                            <div className="col-auto p-0 mx-2">
                                <div className="h5 mb-0">{this.props.contact.name}</div>
                                <div>{this.props.contact.email}</div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link to={{pathname:"/delete", state : {contact : this.props.contact}}}>
                    <a>
                        <BsTrash size={23} color="red" />
                    </a>
                </Link>

            </li>

        );
    }
};

export default ContactCard;