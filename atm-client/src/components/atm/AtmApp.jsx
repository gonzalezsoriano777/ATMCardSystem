import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class AtmApp extends Component {
  render() {
    return (
      <div className="AtmApp">
        <Router>
          <Fragment>
            <HeaderComponent />
            <Switch>
              <Route path="/" component={LoginComponent} />
              <Route path="/login" component={LoginComponent} />
              <Route path="/welcome/:name" component={WelcomeComponent} />
              <Route path="/todos" component={ListTodosComponent} />
              <Route component={ErrorComponent} />
            </Switch>
            <FooterComponent />
          </Fragment>
        </Router>
      </div>
    )
  }
}

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-link">Home</li>
            <li className="nav-link">Initialize Card</li>
          </ul>
          <ul className="navbar-nav navbar-collapse justify-content-end">
            <li className="nav-link">Login</li>
            <li className="nav-link">Logout</li>
          </ul>
        </nav>
      </header>
    )
  }
}

class FooterComponent extends Component {
  render() {
    return (
      <div>
        <hr /> Footer
      </div>
    )
  }
}

class ListTodosComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todo: [
        { id: 1, description: 'Learn React', done: false, targetDate: new Date() },
        { id: 1, description: 'Become a Expert at Something', done: false, targetDate: new Date() },
        { id: 1, description: 'Visit Japan', done: false, targetDate: new Date() }
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>description</th>
              <th>Target Date</th>
              <th>Is Completed?</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.todo.map(
                todo =>
                  <tr>
                    <td>{todo.id}</td>
                    <td>{todo.description}</td>
                    <td>{todo.done.toString()}</td>
                    <td>{todo.targetDate.toString()}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
      </div >
    )
  }
}

class WelcomeComponent extends Component {
  render() {
    return <div>Welcome {this.props.match.params.name} You can manage your todos <Link to="/todos">Here</Link></div>
  }
}

function ErrorComponent() {
  return <div>An Error Occured.. GO BACK!</div>
}

class LoginComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      CardNumber: '',
      PinNumber: '',
      hasLoginFailed: false,
      showSuccessMessage: false
    }

    // this.handleCardNumberChange = this.
    //   handleCardNumberChange.bind(this);
    //   this.handlePinNumberChange = this.handlePinNumberChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    console.log(this.state);
    this.setState(
      {
        [event.target.name]
          : event.target.value
      }
    )
  }

  loginClicked() {
    if (this.state.CardNumber === '12345'
      && this.state.PinNumber === '12345') {
      this.props.history.push(`/welcome/${this.state.username}`);
    }
    else {
      this.setState({ showSuccessMessage: false })
      this.setState({ hasLoginFailed: true })
    }
    console.log(this.state);
  }

  // handleCardNumberChange(event) {
  //   console.log(event.target.name);
  //   this.setState({ CardNumber: event.target.value })
  // }

  // handlePinNumberChange(event) {
  //   console.log(event.target.value);
  //   this.setState({ PinNumber: event.target.value })
  // }

  render() {
    return (
      <div>
        <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
        <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage} />
        CardNumber: <input type="text" name="CardNumber" value={this.state.CardNumber} onChange={this.handleChange} />
          PinNumber: <input type="password" name="PinNumber" value={this.state.PinNumber} onChange={this.handleChange} />
        <button onClick={this.loginClicked}>Login</button>
      </div>
    )
  }
}

function ShowInvalidCredentials(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid Credentials</div>
  }
  return null
}

function ShowLoginSuccessMessage(props) {
  if (props.showSuccessMessage) {
    return <div>Login Success</div>
  }
  return null
}

export default AtmApp;