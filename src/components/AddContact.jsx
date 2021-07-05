import React, {Component} from 'react';

class AddContact extends Component{

    render(){
        return(
            <form className="container mt-4">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Name" />
                </div>
                <div class="form-group">
                    <label for="email">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Email" />
                </div>
                <button type="submit" class="btn btn-primary">Add</button>
            </form>
        );
    }
};

export default AddContact;