import React, { Component } from 'react';
import './Counter.css';

//Define the initial state in a constructor
//state => counter 0

class Counter extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>
        <span className="count">{this.state.counter}</span>
      </div>
    )
  }

  increment() { // Update state - counter++
    this.state.counter++;
    this.setState({
      counter: this.state.counter + 1
    });
  }
}

export default Counter