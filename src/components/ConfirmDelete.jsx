import React from 'react';

const ConfirmDelete = (props) => {
    const {name, id} = props.location.state.contact;

    const handleDelete = () => {
        props.deleteContact(id);
        props.history.push("/");
    }

    return(
        <div className="container">
            <div className="content m-5">
                <h4>Are you sure to delete the contact {name}</h4>
                <p className="text-muted">Changes cant be reverted</p>
                <button className="btn btn-danger mr-3" onClick = {handleDelete}>
                    Delete
                </button>
                <button className="btn btn-secondary" onClick = {() => props.history.push("/")}>
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default ConfirmDelete;