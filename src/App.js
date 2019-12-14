import React from "react";
import { connect } from "react-redux";

import "./App.css";

const App = ({ dispatch, total }) => {
  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "ADD_NUMBER", payload: 2 })}>
        +
      </button>{" "}
      {total}
    </div>
  );
};

const mapStateToProps = state => ({ total: state.add.total });

export default connect(mapStateToProps)(App);
