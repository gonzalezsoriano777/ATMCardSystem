import React, { Component } from 'react';
import './App.css';
import AtmApp from './components/layout/AtmApp';
import './bootstrap.css';
import './atm-bg.jpg';

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
