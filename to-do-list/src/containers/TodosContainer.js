import React, { Component } from 'react';
import Todos from '../components/ToDos';
import TodoModel from '../models/Todo';

class ToDoContainers extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.fetchData()
    
  };

  fetchData = () => {
    TodoModel.all().then((res) => {
      console.log(res);
      this.setState ({
        todos: res.data.todos,
      });
    })
    .catch((error) => {
      console.log(error);
    })
  };

  render() {
    return (
      <div className="todosComponent">
        <Todos
          todos={this.state.todos} />
      </div>
      );
    };
  };

export default ToDoContainers;