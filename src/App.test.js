import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

test("App should render", () => {
  const app = render(
    <Router>
      <App />
    </Router>
  );

  expect(app.queryByText(/Welcome/)).toBeInTheDocument();
  expect(app.queryByText(/Your todos/)).not.toBeInTheDocument();
  expect(app.queryByTestId("link-to-home")).toBeInTheDocument();
  expect(app.queryByTestId("link-to-todos")).toBeInTheDocument();
});

test("App should render and matches the snapshot", () => {
  const app = render(
    <Router>
      <App />
    </Router>
  );
  expect(app).toMatchSnapshot();
});
