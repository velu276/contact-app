import React, {Component} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

class App extends Component{

    state = {
        contacts : [
            {
                id : '1',
                name : "subhash",
                email : "sub@email.com"
            },
            {
                id : '2',
                name : "vashruth",
                email : "vas@email.com"
            }
        ],
    };

    render(){
        return(
                
                <div>
                    <Header />
                    <AddContact />
                    <ContactList contacts = {this.state.contacts} />
                </div>
        );
    }
}

export default App;
