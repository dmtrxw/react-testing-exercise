import React from 'react';

export default function TodoItem(props) {
  const { todo } = props;
  return (
    <div className="card mt" role="listitem">
      <h1 className="card-title">{todo.title}</h1>
    </div>
  );
}
