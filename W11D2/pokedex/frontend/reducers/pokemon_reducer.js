import { RECEIVE_ALL_POKEMONS, RECEIVE_POKEMON } from '../actions/pokemon_actions';


const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  // const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_ALL_POKEMONS:
      return action.pokemons;
    default:
      return state;
  }
}

export default pokemonReducer;