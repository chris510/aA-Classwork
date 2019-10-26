import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from '../actions/todo_actions';

const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_TODOS:
      action.todos.forEach( (todo) => {
        newState[todo.id] = todo;
      });
      return newState; 
    case RECEIVE_TODO: 
      newState[action.todo.id] = action.todo;
      return newState; 
    // case REMOVE_TODO:
    //   let itemIdx = state.indexOf(action.todo);
    //   newState = newState.splice(itemIdx - 1, 1);
    //   return newState;
    default:
      return state;
  }
};

export default todosReducer;