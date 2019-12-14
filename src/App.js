import React from "react";
import { connect } from "react-redux";
import TechnosContainer from "./TechnosContainer.js";
import TechnosListContainer from "./TechnosListContainer.js";

import "./App.css";

const App = ({ dispatch, total }) => {
  return (
    <>
      <div className="App">
        <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: 2 })}>
          +
        </button>{" "}
        {total}
      </div>
      <TechnosContainer />
      <TechnosListContainer />
    </>
  );
};

const mapStateToProps = state => ({ total: state.add.total });

export default connect(mapStateToProps)(App);
