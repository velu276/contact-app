import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import user from '../images/human.jpg';


const ContactDetail = (props) => {
    console.log(props);
    const {name, email} = props.location.state.contact;

    return (
        <div>
            <div className="row">
                <div className="col"> </div>
                <div className="col- card mt-5 " style={{width: "18rem"}}>
                    <img className="card-img-top" src={user} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title mb-1">{name}</h5>
                        <p className="text-muted mb-0">{email}</p>
                    </div>
                </div>
                <div className="col"> </div>
            </div>
            <div className="row">
                <div className="col"> </div>
                <div className="col- mt-4" style={{width: "10rem"}}>
                    <Link to="/">
                        <button className='btn btn-primary'>Back to contacts</button>
                    </Link>
                </div>
                <div className="col"> </div>
            </div>
        </div>
        
    );
};

export default ContactDetail;