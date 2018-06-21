import axios from "axios";

const GET_JOBS = "GET_JOBS";
const APP_JOBS = "APP_JOBS";
const GET_APP_JOBS = "GET_APP_JOBS";
const DELETE_JOBS = "DELETE_JOBS";

const intialState = {
  jobs: [],
  appJobs: [],
  appliedJob: {},
  isLoading: false
};

export function getJobs() {
  return {
    type: GET_JOBS,
    payload: axios
      .get("/api/getJobs")
      .then(results => {
        return results.data;
      })
      .catch(err => console.log(err))
  };
}
export function appJobs(jobid) {
  return {
    type: APP_JOBS,
    payload: axios
      .post("/api/appJobs", { jobid })
      .then(results => {
        return results.data;
        console.log(results);
      })
      .catch(err => console.log(err))
  };
}
export function getAppJobs() {
  return {
    type: GET_APP_JOBS,
    payload: axios
      .get("/api/getAppJobs")
      .then(results => {
        console.log(results.data);
        return results;
      })
      .catch(err => console.log(err))
  };
}
export function deleteJobs(jobid) {
  return {
    type: DELETE_JOBS,
    payload: axios
      .delete(`/api/deleteJobs/${jobid}`)
      .then(results => {
        return results.data;
      })
      .catch(err => console.log(err))
  };
}

export default function jobsReducer(state = intialState, action) {
  switch (action.type) {
    case `${GET_JOBS}_PENDING`:
    case `${APP_JOBS}_PENDING`:
    case `${GET_APP_JOBS}_PENDING`:
    case `${DELETE_JOBS}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_JOBS}_FULFILLED`:
      return { ...state, isLoading: false, jobs: action.payload };

    case `${DELETE_JOBS}_FULFILLED`:
      return { ...state, isLoading: false, appJobs: action.payload };
    case `${APP_JOBS}_FULFILLED`:
      console.log(action.type, action.payload);

      return { ...state, isLoading: false, appliedJob: action.payload };
    case `${GET_APP_JOBS}_FULFILLED`:
      console.log(action.type, action.payload);

      return { ...state, isLoading: false, appJobs: action.payload.data };

    default:
      return state;
  }
}
