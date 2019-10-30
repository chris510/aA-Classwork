import React from 'react';
import { Provider } from 'react-redux';
import PokemonsIndexContainer from "../components/pokemons/pokemons_index_container";
import PokemonDetailContainer from "../components/pokemons/pokemon_detail_container";
import { HashRouter, Route } from 'react-router-dom';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path="/" component={PokemonsIndexContainer} />
    </HashRouter>
  </Provider>
);

export default Root;