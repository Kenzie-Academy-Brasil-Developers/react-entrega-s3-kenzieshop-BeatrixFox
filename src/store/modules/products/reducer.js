import { productsAnime } from "../../../services/productsAnime";

const defaultState = productsAnime;

const productsAnimeReducer = (state = defaultState, action) => {
  switch (action.activity) {
    default:
      return state;
  }
};

export default productsAnimeReducer;
