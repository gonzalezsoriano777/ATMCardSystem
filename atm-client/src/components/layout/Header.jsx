import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import AuthenticationService from '../auth/AuthenticationService.js';

class HeaderComponent extends Component {
  render() {
    const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

    return (
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
          <div>
            <a href='/login' className='navbar-brand'>
              ATMSystem
            </a>
          </div>
          <ul className='navbar-nav'>
            {isUserLoggedIn && (
              <li>
                <Link className='nav-link' to='/welcome/hector'>
                  Home
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link className='nav-link' to='/todos'>
                  TodoExample
                </Link>
              </li>
            )}
          </ul>
          <ul className='navbar-nav navbar-collapse justify-content-end'>
            {!isUserLoggedIn && (
              <li>
                <Link className='nav-link' to='/register'>
                  Initialize Card
                </Link>{' '}
              </li>
            )}
            {!isUserLoggedIn && (
              <li>
                <Link className='nav-link' to='/login'>
                  Login
                </Link>
              </li>
            )}
            {isUserLoggedIn && (
              <li>
                <Link
                  className='nav-link'
                  to='/logout'
                  onClick={AuthenticationService.logout}
                >
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(HeaderComponent);
