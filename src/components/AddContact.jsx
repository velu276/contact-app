import React, {Component} from 'react';

class AddContact extends Component{

    state = {
        name : "",
        email : ""
    }

    nameChange = (e) => {
        this.setState({name : e.target.value});
    }

    emailChange = (e) => {
        this.setState({email : e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.setState({name : "", email : ""});
        this.props.history.push("/");
    }

    render(){
        return(
            <form className="container mt-4" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Name" 
                        onChange = {this.nameChange}
                        value = {this.state.name}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input 
                        type="email"
                        aria-describedby="emailHelp" 
                        className="form-control" 
                        id="email" 
                        placeholder="Email"
                        onChange = {this.emailChange}
                        value = {this.state.email}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
            </form>
        );
    }
};

export default AddContact;