import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
      persons:[
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false
    }

    switchNameHandler = (newName) => {
      this.setState({
        persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
      })
    }

    nameChangedHandler = (event) => {
      this.setState({
        persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
      })
    }

    togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
    }  

    deletePersonHandler = (personIndex) => {
      const persons = this.state.persons;
      persons.splice(personIndex, 1);
      this.setState({persons: persons});
    }

    render () {
      const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
      };

      let persons = null;

      if (this.state.showPersons === true) {
        persons = (
          <div >
            {this.state.persons.map((person, index) => {
              return <Person 
                      click={() => this.deletePersonHandler(index)}
                      name={person.name} 
                      age={person.age} />
            })}
          </div>
        );
      }

      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button 
            style={style}
            onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
        </div>
      );
  }
}

export default App;

  