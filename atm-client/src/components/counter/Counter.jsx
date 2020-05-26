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
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
        <span className="count">{this.state.counter}</span>
        <div>
          <button className="reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
    )
  }

  reset() {
    this.setState({
      counter: 0
    }
    )
  }

  increment(by) {
    this.setState(
      (prevState) => {
        return { counter: prevState.counter + by }
      }
    );
  }

  decrement(by) {
    this.setState(
      (prevState) => {
        return { counter: prevState.counter - by }
      }
    );
  }

}

class CounterButton extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}> +{this.props.by}</button>
        <button onClick={this.decrement}> -{this.props.by}</button>
        {/* <span className="count">{this.state.counter}</span> */}
      </div>
    )
  }

  increment() {
    this.setState({
      counter: this.state.counter + this.props.by
    });

    this.props.incrementMethod(this.props.by);

  }

  decrement() {
    this.setState({
      counter: this.state.counter - this.props.by
    });

    this.props.decrementMethod(this.props.by);
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