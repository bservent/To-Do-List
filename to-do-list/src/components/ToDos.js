import React from 'react';
import Todo from './ToDo';

const Todos = (props) => {
  let todos = props.todos.map((todo) => {
    return (
      <Todo 
        key={ todo._id }
        todo={ todo } 
        deletedTodo={props.deleteTodo} 
        updateTodo={props.updateTodo}
        />
    );
  });

  return (
    <ul>
      { todos }
    </ul>
  );
};

export default Todos;