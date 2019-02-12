import React from "react";

const TechnologyItem = ({ name, path }) => {
  return (
    <div className="technologies-item">
      <h6>{name}</h6>
      <img alt={name} src={path} />
    </div>
  );
};

export default TechnologyItem;
