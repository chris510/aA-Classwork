import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.pokemonId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.pokemonId !== this.props.match.params.pokemonId) {
      this.props.requestPokemon(this.props.match.params.pokemonId);
    }
  }


  render() {
    debugger;
    if (this.props.pokemon === undefined) return null;

    return (
      <h1>Hello</h1>
    )
  }
}

export default PokemonDetail;