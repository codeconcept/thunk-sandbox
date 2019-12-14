import { connect } from "react-redux";
import TechnosList from "./TechnosList.js";

const mapStateToProps = state => {
  return { technos: state.technos };
};

export default connect(mapStateToProps)(TechnosList);
