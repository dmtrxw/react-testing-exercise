const serverUrl = 'http://localhost:3000';

export const FETCH_TODOS = 'FETCH_TODOS';
export const SUCCESS_FETCH_TODOS = 'SUCCESS_FETCH_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const SUCCESS_ADD_TODO = 'SUCCESS_ADD_TODO';

export const fetchTodos = () => async (dispatch) => {
  const response = await fetch(`${serverUrl}/todos`);
  const todos = await response.json();

  dispatch(successFetchTodos(todos));
};

export const successFetchTodos = (todos) => ({
  type: SUCCESS_FETCH_TODOS,
  payload: todos,
});

export const addTodo = (title) => async (dispatch) => {
  const response = await fetch(`${serverUrl}/todos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title }),
  });
  const todo = await response.json();

  dispatch(successAddTodo(todo));
};

export const successAddTodo = (todo) => {
  return {
    type: SUCCESS_ADD_TODO,
    payload: todo,
  };
};
