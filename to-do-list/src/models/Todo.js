import axios from 'axios';

const endPoint = `http://super-crud/herokuapp.com/todos`;

class TodoModel {
  static all = () => {
    let request = axios.get(endPoint);
    return request;
  };
};

export default TodoModel;