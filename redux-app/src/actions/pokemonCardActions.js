import axios from "axios";

export const FETCH_POKEMONCARD_DATA_START = "FETCH_POKEMONCARD_DATA_START";
export const FETCH_POKEMONCARD_DATA_SUCCESS = "FETCH_POKEMONCARD_DATA_SUCCESS";
export const FETCH_POKEMONCARD_DATA_FAILURE = "FETCH_POKEMONCARD_DATA_FAILURE";

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_POKEMONCARD_DATA_START });
    axios
      .get("https://api.pokemontcg.io/v1/cards?setCode=base1")
      .then(res => {
        console.log(res);
        dispatch({ type: FETCH_POKEMONCARD_DATA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({
          type: FETCH_POKEMONCARD_DATA_FAILURE,
          payload: err.response
        });
      });
  };
};
