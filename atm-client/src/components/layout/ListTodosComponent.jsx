import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService';
import AuthenticationService from '../auth/AuthenticationService';
import monent from 'moment';

class ListTodosComponent extends Component {
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = {
      todos: [],
      message: null,
    };

    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
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
    this.refreshTodos();
  }

  refreshTodos() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      //console.log(response);
      this.setState({
        todos: response.data,
      });
    });
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    //console.log(id + " " + username);
    TodoDataService.deleteTodo(username, id).then((response) => {
      this.setState({ message: `Delete of todo ${id} Successful!` });
      this.refreshTodos();
    });
  }

  updateTodoClicked(id) {
    console.log('update' + id);
    this.props.history.push(`/todos/${id}`);
  }

  render() {
    console.log('render');
    return (
      <div>
        <h1>List Todos</h1>

        {this.state.message && (
          <div className='alert alert-success'>{this.state.message}</div>
        )}
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Description</th>
                <th>Target Date</th>
                <th>Is Completed?</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todos) => (
                <tr>
                  <td>{todos.id}</td>
                  <td>{todos.description}</td>
                  <td>{monent(todos.targetDate).format('YYYY-MM-DD')}</td>
                  <td>{todos.done.toString()}</td>
                  <td>
                    <button
                      className='btn btn-success'
                      onClick={() => this.updateTodoClicked(todos.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={() => this.deleteTodoClicked(todos.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTodosComponent;
