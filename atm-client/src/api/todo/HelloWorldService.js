import axios from 'axios';

class HelloWorldService {
  executeHelloWorldService() {
    return axios.get('http://localhost:8080/hello-world');
  }

  executeHelloWorldBeanService() {
    return axios.get('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldPathVariableService(name) {
    // let username = 'user';
    // let password = '9ecca917-ffa0-41a8-85e4-177ada42e0a6';

    // let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);

    return axios.get(
      `http://localhost:8080/hello-world/path-variable/${name}`
      // {
      //   headers: {
      //     authorization: basicAuthHeader,
      //   },
      // }
    );
  }
}

export default new HelloWorldService();
