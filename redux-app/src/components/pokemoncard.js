import React from "react";

const PokemonCard = props => {
  return (
    <div>
      <h4>{props.card.name}</h4>
    </div>
  );
};

export default PokemonCard;
