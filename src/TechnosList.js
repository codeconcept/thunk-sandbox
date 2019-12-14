import React from "react";

const TechnosList = ({ technos }) => {
  return (
    <div>
      {technos.length === 0 && <h3>loading...</h3>}
      {technos &&
        technos.map(t => (
          <div key={t._id}>
            <h3>{t.name}</h3>
            <div>{t.details}</div>
          </div>
        ))}
    </div>
  );
};

export default TechnosList;
