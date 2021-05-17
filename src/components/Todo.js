import React from 'react';
import '../styles/TodoStyle.css';

const Todo = ({ todo, completeTodo, index, removeTodo }) => {
  return (
    <div
      className='todo'
      style={{
        textDecoration: todo.isCompleted ? 'line-through' : '',
        color: todo.isCompleted ? 'green' : 'red',
      }}
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  );
};

export default Todo;
