import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li data-todos-index={this.props.todo._id}>
        <span className="todo-item">{this.props.todo.body}</span>
      </li>
    );
  };
};

export default ToDo;