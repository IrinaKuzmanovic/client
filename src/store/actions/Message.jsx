import {
  SET_MESSAGE,
  CLEAR_MESSAGE,
  CREATE_THEATERS,
  UPDATE_THEATERS,
  DELETE_ALL_THEATERS,
  DELETE_THEATERS,
  GET_THEATERS,
  GET_PERFORMANCE,
  CREATE_PERFORMANCE,
  UPDATE_PERFORMANCE,
  DELETE_PERFORMANCE,
  GET_GENRE,
} from "./Types";
import DataService from "../services/DataService";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessage = () => ({
  type: CLEAR_MESSAGE,
});

//theater
export const getTheater = () => async (dispatch) => {
  try {
    const res = await DataService.getAll();
    dispatch({
      type: GET_THEATERS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const deleteTheater = (id) => async (dispatch) => {
  try {
    await DataService.remove(id);
    dispatch({
      type: DELETE_THEATERS,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

//performances
export const getPerformances = () => async (dispatch) => {
  try {
    const res = await DataService.getAllPerformances();
    dispatch({
      type: GET_PERFORMANCE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
export const createPerformance =
  (performanceName, dateOfThePerformance) => async (dispatch) => {
    try {
      const res = await DataService.createPerformance({
        performanceName,
        dateOfThePerformance,
      });
      dispatch({ type: CREATE_PERFORMANCE, payload: res.data });
      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };
export const updatePerformances = (id, data) => async (dispatch) => {
  try {
    const res = await DataService.updatePerformance(id, data);
    dispatch({
      type: UPDATE_PERFORMANCE,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const deletePerformance = (id) => async (dispatch) => {
  try {
    await DataService.removePerformance(id);
    dispatch({
      type: DELETE_PERFORMANCE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};

//genre
export const getGenre = () => async (dispatch) => {
  try {
    const res = await DataService.getAllGenres();
    dispatch({
      type: GET_GENRE,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
