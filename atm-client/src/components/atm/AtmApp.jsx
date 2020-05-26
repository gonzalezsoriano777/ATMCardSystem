import React, { Component } from 'react';

class AtmApp extends Component {
  render() {
    return (
      <div>
        <LoginComponent />
      </div>
    )
  }
}

class LoginComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      CardNumber: '',
      PinNumber: ''
    }

    this.handleCardNumberChange = this.
      handleCardNumberChange.bind(this);

  }

  handleCardNumberChange(event) {
    console.log(event.target.value);
    this.setState({ CardNumber: event.target.value })
  }

  handlePinNumberChange(event) {
    console.log(event.target.value);
    this.setState({ PinNumber: event.target.value })
  }

  render() {
    return (
      <div>
        Card Number: <input type="text" name="CardNumber" value={this.state.CardNumber} onChange={this.handleCardNumberChange} />
          Pin Number: <input type="text" name="PinNumber" value={this.state.PinNumber} onChange={this.handlePinNumberChange} />
        <button>Login</button>
      </div>
    )
  }
}

export default AtmApp;