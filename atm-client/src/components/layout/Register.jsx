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
      // Authentication will be put on hold...
      <div className='container'>
        <h1>Register</h1>
        username: <input type='text' name='username' />
        <br />
        password: <input type='password' name='password' />
      </div>
    );
  }
}

export default RegisterComponent;
