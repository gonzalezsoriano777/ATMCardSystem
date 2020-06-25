import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './auth/AuthenticatedRoute';
import LoginComponent from './layout/Login';
import ListTodosComponent from './layout/ListTodosComponent';
import HeaderComponent from './layout/Header';
import WelcomeComponent from './layout/WelcomeComponent';
import TodoComponent from './layout/TodoComponent';
import RegisterComponent from './layout/Register';

// Routes will be changed after checking db build
class AtmApp extends Component {
  render() {
    return (
      <div className='AtmApp'>
        <Router>
          <Fragment>
            <HeaderComponent />
            <Switch>
              <Route path='/' exact component={RegisterComponent} />
              <Route path='/register' component={RegisterComponent} />
              <Route path='/login' component={LoginComponent} />
              <AuthenticatedRoute
                path='/welcome/:name'
                component={WelcomeComponent}
              />
              <AuthenticatedRoute path='/todos/:id' component={TodoComponent} />
              <AuthenticatedRoute
                path='/todos'
                component={ListTodosComponent}
              />
              <AuthenticatedRoute path='/logout' component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </Fragment>
        </Router>
      </div>
    );
  }
}

function ErrorComponent() {
  return <div>An Error Occured.. GO BACK!</div>;
}

class LogoutComponent extends Component {
  render() {
    return (
      <Fragment>
        <h1>You are logged out</h1>
        <div className='container'>Thank you for using our application</div>
      </Fragment>
    );
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className='footer'>
        <span className='text-muted'>
          All Rights Reserved @ATMCardSytem 2020
        </span>
      </footer>
    );
  }
}

export default AtmApp;
