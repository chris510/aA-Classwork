export const selectAllPokemons = (state) => {
  return Object.values(state.entities.pokemon)
}

export const selectPokemon = (state, id) => {
  debugger;
  return state.entities.pokemon[id]
}