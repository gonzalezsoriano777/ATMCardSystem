import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from '../auth/AuthenticationService';

class ListTodosComponent extends Component {

  constructor(props) {
    console.log('constructor');
    super(props)
    this.state = {
      todos: [],
      message: null
    }

    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);

  }

  componentWillUnmount() {
    console.log('componentDidUnmount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  componentDidMount() {
    console.log('componentDidMount');
    let username = AuthenticationService.getLoggedInUserName;
    TodoDataService.retrieveAllTodos(username)
      .then(
        response => {
          //console.log(response);
          this.setState({
            todos: response.data
          })
        }
      )
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    // console.log(id + " " + username);
    TodoDataService.deleteTodo(username, id)
      .then(response => {
        this.setState({ message: `Delete of todo ${id} Successful!` })
      })
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>List Todos</h1>
        {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
        <div className="container">

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Completed?</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>

              {
                this.state.todos.map(
                  todos =>
                    <tr>
                      <td>{todos.id}</td>
                      <td>{todos.description}</td>
                      <td>{todos.done.toString()}</td>
                      <td>{todos.targetDate.toString()}</td>
                      <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todos.id)}>Delete</button></td>
                    </tr>
                )
              }

            </tbody>
          </table>
        </div>
      </div >
    )
  }
}

export default ListTodosComponent;