import React, { Component } from 'react';
import './App.css';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

class App extends Component {
  state = {
    userName: "Priscila"
  }

  updateName = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput change = {this.updateName}></UserInput>
        <UserOutput userName = {this.state.userName}></UserOutput>
      </div>
    );
  }
}

export default App;