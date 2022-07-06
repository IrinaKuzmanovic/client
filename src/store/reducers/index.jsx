import { combineReducers } from "redux";
import auth from "./Auth";
import message from "./Message";
import theaterReducer from "./TheaterReducer";
import performanceReducer from "./PerformanceReducer";
import genreReducer from "./GenreReducer";

export default combineReducers({
  auth,
  message,
  theaterReducer,
  performanceReducer,
  genreReducer,
});
