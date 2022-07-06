import { GET_GENRE } from "../actions/Types";

const initialState = [];

const GenreReducer = (genres = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_GENRE:
      return payload;
    default:
      return genres;
  }
};

export default GenreReducer;
