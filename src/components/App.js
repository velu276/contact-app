import React, {Component} from 'react';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


class App extends Component{

    state = {
        pres_id : 0,
        contacts : [],
    };

    addContactHandler = (contact) => {
        var contacts = this.state.contacts;
        var new_id = this.state.pres_id+1;
        contacts.push({
            id : new_id.toString(),
            name : contact.name,
            email : contact.email
        });
        this.setState({
            pres_id : new_id,
            contacts : contacts,
        });
    };

    deleteContactHandler = (id) => {
        var contacts = [];
        for(var i=0;i<this.state.contacts.length;i++){
            if(this.state.contacts[i].id !== id){
                contacts.push(this.state.contacts[i]);
            }
        }
        this.setState({contacts});
    };

    componentDidUpdate = () => {
        localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
        localStorage.setItem("presId", JSON.stringify(this.state.pres_id));
    };

    componentDidMount = () => {
        const retriveContacts = JSON.parse(localStorage.getItem("contacts"));
        const pres_id = JSON.parse(localStorage.getItem("presId"));
        if(retriveContacts){
            this.setState({contacts : retriveContacts, pres_id : pres_id});
        }
    };

    render(){
        return(
            <div>
                <Router>
                    <Header />
                    <Switch>
                        <Route
                            path='/' 
                            exact 
                            render = {(props) => <ContactList {...props} key={2} contacts = {this.state.contacts} deleteContact = {this.deleteContactHandler} />}
                        />
                        <Route 
                            path="/add" 
                            render={(props) => <AddContact {...props} addContact = {this.addContactHandler} />}
                        />
                        <Route
                            path="/contact/:id"
                            component={ContactDetail}
                        />
                    </Switch>
                </Router>
                
            </div>
        );
    }
}

export default App;
