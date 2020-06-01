import React, { Fragment, Component } from 'react';
import { Link } from 'react-router-dom';
import HelloWorldService from '../../api/todo/HelloWorldService.js'

class WelcomeComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      welcomeMessage: ''
    }

    this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    this.handleSuccessfulResponse = this.handleSuccessfulResponse.bind(this);
    this.handleError = this.handleError.bind(this);
  }

  render() {
    return (

      <Fragment>
        <h1>Welcome!</h1>
        <div className="container">
          Welcome {this.props.match.params.name} You can manage your todos <Link to="/todos">Here</Link>
        </div>
        <div className="container">
          Click here to get a customized welcome.
          <button onClick={this.retrieveWelcomeMessage}>Get Welcome Message</button>
        </div>
      </Fragment>

    )
  }

  retrieveWelcomeMessage() {
    //HelloWorldService.executeHelloWorld().then(response => this.handleSuccessfulResponse(response))

    // HelloWorldService.executeHelloWorldBeanService().then(response => this.handleSuccessfulResponse(response))

    HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name).then(response => this.handleSuccessfulResponse(response)).catch(error => this.handleError(error))

  }

  handleSuccessfulResponse(response) {
    this.setState(
      {
        welcomeMessage: response.data
      }
    )
  }

  handleError(error) {
    console.log(error.response);
    this.setState({
      welcomeMessage: error.response.data.message
    })
  }

}

export default WelcomeComponent;