import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import AuthenticationService from './AuthenticationService.js';
import AuthenticatedRoute from './auth/AuthenticatedRoute';
import LoginComponent from './layout/Login';
import ListTodosComponent from './layout/ListTodosComponent';
import HeaderComponent from './layout/Header';
import WelcomeComponent from './layout/WelcomeComponent';
import TodoComponent from './layout/TodoComponent';

class AtmApp extends Component {

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     isLoggedIn: false
  //   }

  //   // this.setLoggedIn = this.setLoggedIn.bind(this);
  // }

  render() {
    return (
      <div className='AtmApp'>
        <Router>
          <Fragment>
            <HeaderComponent />
            <Switch>

              {/* <Route path="/login" exact render={(props) => (
                <LoginComponent {...props} setLoggedIn={this.setLoggedIn} />
              )}
              /> */}

              <Route path='/' exact component={LoginComponent} />
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


//   setLoggedIn(param) {
//     this.setState({
//       isLoggedIn: param,
//     });
//   }


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
