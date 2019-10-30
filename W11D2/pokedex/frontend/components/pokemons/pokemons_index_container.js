import { connect } from "react-redux";
import { requestAllPokemons  } from "../../actions/pokemon_actions";
import { selectAllPokemons } from "../../reducers/selectors";
import PokemonIndex from './pokemon_index';

const mapStateToProps = (state) => ({
  pokemons: selectAllPokemons(state)
})

const mapDispatchToProps = (dispatch) => ({
  requestAllPokemons: () => dispatch(requestAllPokemons())
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonIndex);
