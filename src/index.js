import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// reducer
const add = (state = { total: 0 }, action) => {
  if (action.type === "ADD_NUMBER") {
    console.log("ADD_NUMBER");
    const newState = {
      ...state,
      total: state.total + action.payload
    };
    console.log("newState", newState);
    return newState;
  }
  return state;
};

const URL = "https://nodetestapi-pnmjtlievk.now.sh/technos";

//reducer
export const getTechnos = () => dispatch => {
  console.log("getTechnos thunk / technos / before return");
  return fetch(URL)
    .then(data => data.json())
    .then(technos => {
      console.log("getTechnos thunk / technos", technos);
      dispatch({
        type: "ADD_TECHNOS",
        payload: technos
      });
    })
    .catch(err => console.error(err));
};

// reducer
const addTechnos = (state = [], action) => {
  console.log("addTechnos / before if");
  if (action.type === "ADD_TECHNOS") {
    const newState = action.payload;
    console.log("addTechnos / newState", newState);
    return newState;
  }
  return state;
};

const reducers = combineReducers({ add, technos: addTechnos });

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
