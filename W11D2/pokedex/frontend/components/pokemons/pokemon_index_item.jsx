import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {
  return (
    <li>
      <Link to={'/pokemon/' + props.pokemon.id}>
        <h3>{props.pokemon.name}</h3>
        <img src={props.pokemon.image_url} alt={props.pokemon.name} height="100"/>
      </Link>
    </li>
  )
}

export default PokemonIndexItem;