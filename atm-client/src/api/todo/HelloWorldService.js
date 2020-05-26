import axios from 'axios';

class HelloWorldService {

  executeHelloWorld() {
    axios.get('http://localhost:8080/hello-world');

  }

}

export default new HelloWorldService()