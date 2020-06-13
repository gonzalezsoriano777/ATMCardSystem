import React, { Component } from 'react';
import AuthenticationService from '../auth/AuthenticationService.js';
import '../comp-css/Login.css';

class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'hector',
      password: 'hector',
      hasLoginFailed: false,
      showSuccessMessage: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    if (this.state.username === 'hector' && this.state.password === 'hector') {
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      //this.props.setLoggedIn(true);
      this.props.history.push(`/welcome/${this.state.username}`);
    } else {
      this.setState({ showSuccessMessage: false });
      this.setState({ hasLoginFailed: true });
    }
    console.log(this.state);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className='container'></div>
        {this.state.hasLoginFailed && (
          <div className='alert alert-warning'> Invalid Credentials </div>
        )}
        {this.state.showSuccessMessage && <div>Login Successful</div>}
        {/* <ShowInvalidCredentials  hasLoginFailed={this.state.hasLoginFailed} />
        <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} /> */}
        username:{' '}
        <input
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />
        password:{' '}
        <input
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />
        <button
          id='btn-id'
          className='btn btn-dark'
          onClick={this.loginClicked}
        >
          Login
        </button>
      </div>
    );
  }
}

export default LoginComponent;
