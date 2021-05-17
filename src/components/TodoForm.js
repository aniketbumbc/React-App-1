import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [fromValue, setFormValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fromValue) return;
    addTodo(fromValue);
    setFormValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={fromValue}
        className='input'
        onChange={(e) => setFormValue(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
