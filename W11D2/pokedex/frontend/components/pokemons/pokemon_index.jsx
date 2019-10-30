import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetailContainer from './pokemon_detail_container';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.requestAllPokemons();
  }


  render() {
    const pokemonItems = this.props.pokemons.map( pokemon => {
      return (
        <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />
      );
    })

    
    return (
      <section className="pokedex">
        <Route path="/pokemon/:pokemonId" component={PokemonDetailContainer} />
        <ul>{pokemonItems}</ul>
      </section>
    )
  }
}

export default PokemonIndex;