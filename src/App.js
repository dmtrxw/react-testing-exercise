import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <h1>Todo App</h1>
      <nav>
        <Link to="/" data-testid="link-to-home">Home</Link>
        <Link to="/todos" data-testid="link-to-todos">Todos</Link>
      </nav>
      <hr />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/todos">
          <TodoList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
