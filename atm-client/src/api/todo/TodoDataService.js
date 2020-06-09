import axios from 'axios';

class TodoDataService {
  retrieveAllTodos(name) {
    return axios.get(`http://localhost:8080/users/${name}/todos`);
  }

  retrieveTodo(name, id) {
    return axios.get(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  deleteTodo(name, id) {
    return axios.delete(`http://localhost:8080/users/${name}/todos/${id}`);
  }

  updateTodo(name, id, todo) {
    return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo);
  }

}

export default new TodoDataService();
