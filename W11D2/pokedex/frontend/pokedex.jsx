import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root'
import { fetchPokemon } from "./util/api_util";
import { requestPokemon } from "./actions/pokemon_actions";

window.fetchPokemon = fetchPokemon;
window.requestPokemon = requestPokemon;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  window.dispatch = store.dispatch
  const rootEl = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, rootEl);
});