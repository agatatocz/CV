import React from "react";
import TechnologyItem from "./technologyItem";

const Technologies = () => {
  return (
    <div className="technologies">
      <TechnologyItem name="HTML" path="img/html.png" />
      <TechnologyItem name="CSS" path="img/css.png" />
      <TechnologyItem name="JavaScript" path="img/js.png" />
      <TechnologyItem name="React.js" path="img/react.png" />
      <TechnologyItem name="Redux" path="img/redux.png" />
      <TechnologyItem name="npm" path="img/npm.png" />
      <TechnologyItem name="git" path="img/git.png" />
    </div>
  );
};

export default Technologies;
