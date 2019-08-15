import React from "react";
import logo from "./logo.svg";
import "./App.css";
import PokemoncardList from "./components/pokemoncardList";
import { connect } from "react-redux";
import { getData } from "./actions";

const App = props => {
  return (
    <div className="App">
      <PokemoncardList cards={props.card} />
    </div>
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
)(App);
