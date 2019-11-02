import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root';
import { signup, login, logout } from './actions/session_actions';
// import { fetchBenches } from './util/bench_api_util';
import { fetchBenches } from "./actions/bench_actions";

window.signup = signup;
window.login = login;
window.logout = logout;
window.fetchBenches = fetchBenches;

document.addEventListener("DOMContentLoaded", () => {
  // const store = configureStore();

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }


  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});