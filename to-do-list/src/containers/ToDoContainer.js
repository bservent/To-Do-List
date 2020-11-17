import React, { Component } from 'react';
import ToDoModel from '../models/Todo';

class ToDoContainer extends Component {
  render() {
    ToDoModel.all().then((res) => {
      console.log(res);
    })
    return (
      <div className="todosContainer">
        <h2>This is todo container.</h2>
      </div>
    )
  }
};

export default ToDoContainer;