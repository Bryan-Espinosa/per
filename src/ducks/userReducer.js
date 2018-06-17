import axios from "axios";

const GET_USER = "GET_USER";
const UPDATE_PROFILE = "UPDATE_PROFILE";
const DELETE_PROFILE = "DELETE_PROFILE";

const intialState = {
  user: {},
  isLoading: false
};

export function getUser() {
  return {
    type: GET_USER,
    payload: axios
      .get("/api/getUser")
      .then(results => {
        console.log(results);
        return results.data;
      })
      .catch(err => console.log(err))
  };
}

export function updateProfile(firstname, lastname, phone, email, bio) {
  console.log(firstname, lastname, phone, email, bio);

  return {
    type: UPDATE_PROFILE,
    payload: axios
      .put("/api/updateProfile", { firstname, lastname, phone, email, bio })
      .then(results => {
        return results;
      })
      .catch(err => console.log(err))
  };
}

export default function userReducer(state = intialState, action) {
  switch (action.type) {
    case `${GET_USER}_PENDING`:
      return { ...state, isLoading: true };
    case `${GET_USER}_FULFILLED`:
      return { ...state, isLoading: false, user: action.payload };
    case `${UPDATE_PROFILE}_PENDING`:
      return { ...state, isLoading: true };
    case `${UPDATE_PROFILE}_FULFILLED`:
      return { ...state, isLoading: false, profle: action.payload };
    default:
      return state;
  }
}
