import React from "react";
import TechnologyItem from "./TechnologyItem";
import technologies from "../data/technologies";

const Technologies = () => {
  return (
    <div className="technologies">
      {technologies.map(technologie => (
        <TechnologyItem
          name={technologie.name}
          path={`${process.env.PUBLIC_URL}${technologie.path}`}
        />
      ))}
    </div>
  );
};

export default Technologies;
