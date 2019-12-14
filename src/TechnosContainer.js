import { connect } from "react-redux";
import Technos from "./Technos.js";
import { getTechnos } from "./index.js";

const mapDispatchToProps = dispatch => {
  return {
    getTechnosAsync() {
      dispatch(getTechnos());
    }
  };
};

export default connect(null, mapDispatchToProps)(Technos);
