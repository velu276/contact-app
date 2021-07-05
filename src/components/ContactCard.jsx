import React, {Component} from 'react';
import { BsFillTrashFill } from "react-icons/bs";


class ContactCard extends Component{

    render(){
        return(
            <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                <div className="content">
                    <div className="h5 mb-0">{this.props.contact.name}</div>
                    <div>{this.props.contact.email}</div> 
                </div>
                <a>
                    <BsFillTrashFill size={23} color="#000000"/>
                </a>
                
            </li>
        );
    }
};

export default ContactCard;