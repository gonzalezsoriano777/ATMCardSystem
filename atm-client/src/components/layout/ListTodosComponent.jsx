import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from '../auth/AuthenticationService';

class ListTodosComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [
        // { id: 1, description: 'Learn React', done: false, targetDate: new Date() },
        // { id: 1, description: 'Become a Expert at Something', done: false, targetDate: new Date() },
        // { id: 1, description: 'Visit Japan', done: false, targetDate: new Date() }
      ]
    }
  }

  componentDidMount() {
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
  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div className="container">

          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Completed?</th>
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