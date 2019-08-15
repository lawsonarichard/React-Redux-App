const initialState = {
  cards: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMONCARD_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
  }
};
