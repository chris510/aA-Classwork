import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/api_util';
import { fetchSearchGiphys } from './actions/giphy_actions'

document.addEventListener('DOMContentLoaded', () => {
  // window.fetchSearchGiphys = APIUtil.fetchSearchGiphys();
  // window.fetchSearchGiphys = fetchSearchGiphys();
  
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
  // <Root store={store} />

  window.store = store;
});