import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import ListTodosComponent from './ListTodosComponent';
import HeaderComponent from './HeaderComponent';
import WelcomeComponent from './WelcomeComponent';

class AtmApp extends Component {
  render() {
    return (
      <div className="AtmApp">
        <Router>
          <Fragment>
            <HeaderComponent />
            <Switch>
              <Route path="/login" component={LoginComponent} />
              <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
              <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
              <AuthenticatedRoute path="/logout" component={LogoutComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </Fragment>
        </Router>
      </div>
    )
  }
}


function ErrorComponent() {
  return <div>An Error Occured.. GO BACK!</div>
}



class LogoutComponent extends Component {
  render() {
    return (

      <Fragment>
        <h1>You are logged out</h1>
        <div className="container">
          Thank you for using our application
            </div>
      </Fragment>

    )
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">All Rights Reserved @ATMCardSytem 2020</span>
      </footer>
    )
  }
}


export default AtmApp;