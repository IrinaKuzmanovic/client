import http from "../../http-common.jsx/index.jsx";

//theatre
const getAll = () => {
  return http.get(`/theater`);
};
const getByIdTheatre = (id) => {
  return http.get(`/theater/${id}`);
};
const createTheatre = (data) => {
  return http.post(`/theater`, data);
};
const updateTheatre = (id, data) => {
  return http.put(`/theater/${id}`, data);
};
const removeTheatre = (id) => {
  return http.delete(`/theater/${id}`);
};
const removeAllTheatre = () => {
  return http.delete(`/theater`);
};

//performance
const getAllPerformances = (params) => {
  return http.get(`/performance`, { params });
};
const getByIdPerformances = (id) => {
  return http.get(`/performance/${id}`);
};
const createPerformance = (data) => {
  return http.post(`/performance`, data);
};
const updatePerformance = (id, data) => {
  return http.put(`/performance/${id}`, data);
};
const removePerformance = (id) => {
  return http.delete(`/performance/${id}`);
};

//genre
const getAllGenres = () => {
  return http.get(`/genre/allGenre`);
};

const DataService = {
  getAll,
  getByIdTheatre,
  createTheatre,
  updateTheatre,
  removeTheatre,
  removeAllTheatre,
  getAllPerformances,
  getByIdPerformances,
  createPerformance,
  updatePerformance,
  removePerformance,
  getAllGenres,
};
export default DataService;
