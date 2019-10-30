import { connect } from "react-redux";
import { requestPokemon } from "../../actions/pokemon_actions";
import { selectPokemon } from "../../reducers/selectors";
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
  pokemon: selectPokemon(state, ownProps.match.params.pokemonId)
})

const mapDispatchToProps = (dispatch) => ({
  requestPokemon: () => dispatch(requestPokemon())
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
