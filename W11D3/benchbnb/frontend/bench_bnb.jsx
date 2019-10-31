import React from "react";
import ReactDOM from "react-dom";
// import { signup, login, logout } from './actions/session_actions';
import configureStore from "./store/store";
import Root from './components/root';

// window.signup = signup;
// window.login = login;
// window.logout = logout;

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  
  const root = document.getElementById("root");

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<Root store={store}/>, root);
});