import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AtmApp from './components/atm/AtmApp';
import './bootstrap.css';

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
