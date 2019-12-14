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
const reducers = combineReducers({ add });

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
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
