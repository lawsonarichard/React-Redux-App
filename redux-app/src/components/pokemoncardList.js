import React from "react";
import { connect } from "react-redux";
import Loader from "react-loader-spinner";

import { getData } from "../actions";
import PokemonCard from "./pokemoncard";
//stlying
import { Button } from "shards-react";

const PokemoncardList = props => {
  return (
    <>
      <h1>HELLO WELCOME TO POKEMON </h1>
      <Button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="red" height="50" width="100" />
        ) : (
          "Get Pokemon Cards"
        )}
      </Button>
      {props.cards &&
        props.cards.map(card => <PokemonCard key={card.name} card={card} />)}
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    cards: state.cards
  };
};

export default connect(
  mapStateToProps,
  { getData }
)(PokemoncardList);
