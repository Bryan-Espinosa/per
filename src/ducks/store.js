import { createStore, applyMiddleware, combineReducers } from "redux";
import promiseMiddleware from "redux-promise-middleware";
import jobsReducer from "./jobsReducer";
import userReducer from "./userReducer";

const store = createStore(
  combineReducers({ userReducer, jobsReducer }),
  applyMiddleware(promiseMiddleware())
);

export default store;
