import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import './Person/Person.css';

class App extends Component {
  state = { 
    persons: [
      {name: "Aman", age: 30},
      {name: "Sweety", age: 27},
      {name: "Ajay", age: 32}
    ],
    otherState: "someValue"
  }
  switchNameHandler = () => {
    //console.log("clicked");
    // Don't Do this this.state.person[0].name = 'Aman Dhiman';
    this.setState({
      persons: [
        {name: "Aman Dhiman" , age: 28},
        {name: "Sweety", age: 27},
        {name: "Ajay", age: 35}
        ]
    });
  }
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: "Aman" , age: 30},
        {name: event.target.value, age: 27},
        {name: "Ajay", age: 35}
        ]
    });
  }
  render() {
    const myStyle = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    return (
     <div className="App">
        <h1>Here is my First React app.</h1>
        <h1>Hi</h1>
        <button 
        style = { myStyle} 
        onClick = {this.switchNameHandler}>Switch Name</button>
        <Person 
        name = {this.state.persons[0].name} 
        age = {this.state.persons[0].age} />
        <Person 
        name = {this.state.persons[1].name} 
        age = {this.state.persons[1].age}  changed = {this.nameChangeHandler}>I'm from Bapoli
        </Person>
        <Person 
        name = {this.state.persons[2].name} 
        age = {this.state.persons[2].age} />
      </div>
    );
  //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Boom'));
  }
}

export default App;