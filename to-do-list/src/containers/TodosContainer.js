import React, { Component } from 'react';
import Todos from '../components/ToDos';
import CreateTodoForm from '../components/CreateTodoForm';
import TodoModel from '../models/Todo';

class ToDoContainers extends Component {
  state = {
    todos: [],
  };

  deleteTodo = (todo) => {
    TodoModel.delete(todo).then((res) => {
      let todos = this.state.todos.filter((todo) => {
        return todo._id !== res.data._id;
      });
      this.setState({todos});
    });
  };

  componentDidMount() {
    this.fetchData()
    
  };

  fetchData = () => {
    TodoModel.all().then((res) => {
      this.setState ({
        todos: res.data.todos,
      });
    });
  };

  createTodo = (todo) => {
    let newTodo = {
      body: todo,
      completed: false,
    };

    TodoModel.create(newTodo).then((res) => {
      let todos = this.state.todos;
      todos.push(res.data);
      this.setState({ todos: todos });
    });
  };

  render() {
    return (
      <div className="todosComponent">
        <CreateTodoForm
          createTodo={this.createTodo} />
        <Todos
          todos={this.state.todos} 
          deleteTodo={this.deleteTodo}
          />
      </div>
      );
    };
  };

export default ToDoContainers;