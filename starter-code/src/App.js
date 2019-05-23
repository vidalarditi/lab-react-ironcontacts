import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json';
import Contact from './components/contact.jsx'

class App extends Component {
  constructor(){
    super()
    this.state = {
      contacts:contacts.splice(0,5)
    }
    this.updateContacts = this.updateContacts.bind(this)
  }

  addRandomContact = (e) => {

      let randomNum =  Math.floor(Math.random() * Math.floor(contacts.length))
      let randomContact = contacts.splice(randomNum, 1)
      let currentContacts = this.state.contacts;
      currentContacts.push(randomContact[0]);
      this.setState({
        contacts : currentContacts
      })
  }

  sortByName = (e) => {
    let currentContact = this.state.contacts;
    let sortedContacts = currentContact.sort(function (a, b) {
        return a.name.localeCompare(b.name);
      })
    this.setState({
      contacts : sortedContacts
      
    })
  }

  sortByPopularity = (e) => {
    let currentContact = this.state.contacts;
    let sortedContacts = currentContact.sort((a, b) =>  b.popularity - a.popularity);
    this.setState({
      contacts : sortedContacts
    })
  }

  updateContacts(indexN) {
    let updatedContacts = [...this.state.contacts]
    updatedContacts.splice(indexN, 1)
    this.setState({contacts : updatedContacts})
  }
 
  render() {
    
    let logoStyle = {
      width : 100,
      height : 100
    }
    

    return (
      <div className="App">
        <header className="App-header">
          <img src="./contacs.png" alt="contacts" style={logoStyle}/>
          <h1 className="App-title">Iron Contacts</h1>
          <div className="btnPanel">
            <button onClick={ e => this.addRandomContact(e)} >Add Random Contact</button>
            <button onClick={e => this.sortByName(e)}>Sort by Name</button>
            <button onClick={e => this.sortByPopularity(e)}>Sort by Popularity</button>
          </div>
        </header>
        <div className="App-intro">
        <table>
          <tr>
            <th>Photo</th>
            <th>Name</th> 
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          <tbody>
            {this.state.contacts.map((contact, index) => 
              <Contact {...contact} 
              index={index.toString()}
              deleteContact={this.updateContacts}
              />
              )}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
