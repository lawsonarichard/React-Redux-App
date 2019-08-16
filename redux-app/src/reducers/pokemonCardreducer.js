import {
  FETCH_POKEMONCARD_DATA_SUCCESS,
  FETCH_POKEMONCARD_DATA_START,
  FETCH_POKEMONCARD_DATA_FAILURE
} from "../actions";

const initialState = {
  cards: [],
  isLoading: false,
  error: ""
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONCARD_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case FETCH_POKEMONCARD_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        cards: action.payload,
        error: ""
      };
    default:
      return state;
  }
};
