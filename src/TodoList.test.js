import React from "react";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";

import store from "./store";
import App from "./App";

jest.mock("axios");

test("TodoList works well", async () => {
  const app = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );

  axios.get.mockResolvedValueOnce({
    data: [{ id: 1, title: "Fake Todo from Mock!" }],
  });

  fireEvent.click(app.getByTestId("link-to-todos"));

  await waitForElement(() => app.getAllByRole("listitem"));

  expect(app.queryByText(/Your todos/)).toBeInTheDocument();
  expect(app.queryByText(/Welcome/)).not.toBeInTheDocument();

  const event = {
    target: {
      value: "Testing is super fun",
    },
  };

  axios.post.mockResolvedValueOnce({
    data: { id: 2, title: event.target.value },
  });

  fireEvent.change(app.queryByTestId("new-todo-input"), event);
  fireEvent.submit(app.queryByTestId("new-todo-form"));

  await waitForElement(() => app.getAllByRole("listitem"));

  expect(app.queryByTestId("todo-list").children.length).toBe(2);
  expect(app.queryByTestId("todo-list")).toHaveTextContent(event.target.value);
});
