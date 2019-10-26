import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  window.store = store;
  store.dispatch = addLoggingToDispatch(store);

  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// const addLoggingToDispatch = (store) => {
//   const DP = store.dispatch;
//   return (action) => {
//     console.log(store.getState());
//     console.log(action);
//     DP(action);
//     console.log(store.getState());
//   }
// }

const addLoggingtoDispatch = (store) => {
  
}