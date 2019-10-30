import * as APIUtil from '../util/api_util'

export const RECEIVE_ALL_POKEMONS = "RECEIVE_ALL_POKEMONS"
export const RECEIVE_POKEMON = "RECEIVE_POKEMON"

export const receiveAllPokemons = (pokemons) => ({
  type: RECEIVE_ALL_POKEMONS,
  pokemons
})

export const receivePokemon = (pokemon) => ({
  type: RECEIVE_POKEMON,
  pokemon
})

export const requestAllPokemons = () => (dispatch) => (
  APIUtil.fetchAllPokemons()
    .then(pokemons => dispatch(receiveAllPokemons(pokemons)))
)

export const requestPokemon = (id) => (dispatch) => (
  APIUtil.fetchPokemon(id)
    .then(pokemon => dispatch(receivePokemon(pokemon)))
    // .then(pokemon => console.log(pokemon))
)