import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addTodo, fetchTodos } from './store/actions';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(addTodo(title));

    setTitle('');
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter your todo title"
          autoComplete="off"
        />
        <button type="submit">Add</button>
      </form>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="card" role="listitem">
            <h2>{todo.title}</h2>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoList;
