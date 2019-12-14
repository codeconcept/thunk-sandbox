import React, { useEffect } from "react";

const Technos = props => {
  console.log("props", props);
  useEffect(() => {
    console.log("useEffect");
    props.getTechnosAsync();
  }, [props]);

  return <h2>Technos</h2>;
};

export default Technos;
