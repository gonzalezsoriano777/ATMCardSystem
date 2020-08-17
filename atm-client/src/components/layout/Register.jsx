import React, { Component } from 'react';

class RegisterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'John Doe',
      username: '',
      password: '',
      password2: '',
    };
  }

  render() {
    return (
      <div className='container'>
        <h1>Register</h1>
        Name: <input type='text' name='username' />
        <br />
        password: <input type='password' name='password' />
        <br />
        password2: <input type='password' name='password2' />
        <button id='btn-id' className='btn btn-dark'>
          Register
        </button>
      </div>
    );
  }
}

export default RegisterComponent;
