import {
  CREATE_PERFORMANCE,
  UPDATE_PERFORMANCE,
  DELETE_PERFORMANCE,
  GET_PERFORMANCE,
} from "../actions/Types";

const initialState = [];

const PerformanceReducer = (performances = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PERFORMANCE:
      return payload;
    case CREATE_PERFORMANCE:
      return [...performances, payload];
    case UPDATE_PERFORMANCE:
      return performances.map((performance) => {
        if (performance.id === payload.id) {
          return {
            ...performance,
            ...payload,
          };
        } else {
          return performance;
        }
      });
    case DELETE_PERFORMANCE:
      return performances.filter(({ id }) => id !== payload.id);
    default:
      return performances;
  }
};

export default PerformanceReducer;
