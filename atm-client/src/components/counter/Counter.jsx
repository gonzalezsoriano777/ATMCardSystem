import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        <CounterButton by={1} incrementMethod={this.increment} />
        <CounterButton by={5} incrementMethod={this.increment} />
        <CounterButton by={10} incrementMethod={this.increment} />
        <span className="count">{this.state.counter}</span>
      </div>
    )
  }

  increment(by) {
    this.setState({
      counter: this.state.counter + by
    })
  }

}

class CounterButton extends Component {

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
        <button onClick={this.increment}> +{this.props.by}</button>
        <span className="count">{this.state.counter}</span>
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + this.props.by
    });

    this.props.incrementMethod(this.props.by);

  }
}


// Default Counter when initializing its function
/* Counter.defaultProps = {
  by: 1
}
*/

// checker for invalid inputs
/* Counter.propTypes = {
  by: PropTypes.number
}
*/

export default Counter