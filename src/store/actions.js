import axios from "axios";

const serverUrl = "http://localhost:3000";

export const FETCH_TODOS = "FETCH_TODOS";
export const SUCCESS_FETCH_TODOS = "SUCCESS_FETCH_TODOS";
export const ADD_TODO = "ADD_TODO";
export const SUCCESS_ADD_TODO = "SUCCESS_ADD_TODO";

export const fetchTodos = () => async (dispatch) => {
  const { data: todos } = await axios.get(`${serverUrl}/todos`);
  dispatch(successFetchTodos(todos));
};

export const successFetchTodos = (todos) => ({
  type: SUCCESS_FETCH_TODOS,
  payload: todos,
});

export const addTodo = (title) => async (dispatch) => {
  const { data: todo } = await axios.post(`${serverUrl}/todos`, { title });
  dispatch(successAddTodo(todo));
};

export const successAddTodo = (todo) => {
  return {
    type: SUCCESS_ADD_TODO,
    payload: todo,
  };
};
