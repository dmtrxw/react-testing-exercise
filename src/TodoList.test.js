import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './App';

afterEach(() => {
  jest.restoreAllMocks();
});

test('TodoList should work fine', async () => {
  const app = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce([
      {
        id: 1,
        title: 'Learn how to test React app',
      },
    ]),
  });

  fireEvent.click(app.getByTestId('link-to-todos'));

  await waitForElement(() => app.getAllByRole('listitem'));

  expect(app.queryByText(/Welcome/)).not.toBeInTheDocument();
  expect(app.queryByTestId('todo-list').children.length).toBe(1);

  const event = {
    target: {
      value: 'Testing is super fun',
    },
  };

  jest.spyOn(global, 'fetch').mockResolvedValueOnce({
    json: jest.fn().mockResolvedValueOnce({
      id: 2,
      title: event.target.value,
    }),
  });

  fireEvent.change(app.queryByTestId('new-todo-input'), event);
  fireEvent.submit(app.queryByTestId('new-todo-form'));

  await waitForElement(() => app.getAllByRole('listitem'));

  expect(app.queryByTestId('todo-list').children.length).toBe(2);
  expect(app.queryByTestId('todo-list')).toHaveTextContent(event.target.value);
});
