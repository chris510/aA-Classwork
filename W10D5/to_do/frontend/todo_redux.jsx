import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import rootReducer from './reducers/root_reducer';
import { receiveTodos, receiveTodo} from './actions/todo_actions';
import App from './components/app';
import Root from './components/root';
import { allTodos } from './reducers/selectors';
import { fetchAllTodos, createTodo, updateTodo, deleteTodo } from './util/todo_api_util';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById('root');
  const store = configureStore();
  // window.receiveTodos = receiveTodos;
  // window.receiveTodo = receiveTodo;
  window.store = store;
  window.allTodos = allTodos;

  window.fetchAllTodos = fetchAllTodos;
  window.createTodo = createTodo;
  window.updateTodo = updateTodo;
  window.deleteTodo = deleteTodo;
  
  ReactDOM.render(<Root store={store} />, root);
})

