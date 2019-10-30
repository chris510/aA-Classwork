export const fetchAllPokemons = () => (
  $.ajax({
    method: "GET",
    url: `/api/pokemon`
  })
)

export const fetchPokemon = (pokemonId) => (
  $.ajax({
    method: "GET",
    url: `/api/pokemon/${pokemonId}`
  })
)