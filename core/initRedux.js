import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "./reducers";

let reduxStore = null;

let devtools = f => f;
if (process.browser && window.__REDUX_DEVTOOLS_EXTENSION__) {
  devtools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

function create(initialState = {}) {
  return createStore(
    combineReducers({
      ...reducers
    }),
    initialState,
    devtools
  );
}

export default function initRedux(initialState) {
  if (!process.browser) {
    return create(initialState);
  }
  if (!reduxStore) {
    reduxStore = create(initialState);
  }
  return reduxStore;
}
