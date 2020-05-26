import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AtmApp from './components/atm/AtmApp';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AtmApp />
      </div>
    )
  }
}


export default App;
