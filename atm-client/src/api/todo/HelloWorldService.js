import axios from 'axios';

class HelloWorldService {
  executeHelloWorldService() {
    return axios.get('http://localhost:8080/hello-world');
  }

  executeHelloWorldBeanService() {
    return axios.get('http://localhost:8080/hello-world-bean');
  }

  executeHelloWorldPathVariableService(name) {
    let username = 'user';
    let password = '455510bd-07be-4ec1-a3aa-5f2cdf16fa9c';

    let basicAuthHeader = 'Basic ' + window.btoa(username + ':' + password);

    return axios.get(
      `http://localhost:8080/hello-world/path-variable/${name}`,
      {
        headers: {
          authorization: basicAuthHeader,
        },
      }
    );
  }
}

export default new HelloWorldService();
