import { SUCCESS_ADD_TODO, SUCCESS_FETCH_TODOS } from "./actions";

const initialState = {
  todos: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SUCCESS_FETCH_TODOS:
      return { ...state, todos: payload };
    case SUCCESS_ADD_TODO:
      return { ...state, todos: [...state.todos, payload] };
    default:
      return state;
  }
};

export default reducer;
