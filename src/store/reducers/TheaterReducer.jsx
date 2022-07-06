import { GET_THEATERS, DELETE_THEATERS } from "../actions/Types";

const initialState = [];

const TheaterReducer = (theaters = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_THEATERS:
      return payload;
    case DELETE_THEATERS:
      return theaters.filter(({ id }) => id !== payload.id);
    default:
      return theaters;
  }
};

export default TheaterReducer;
