import React from "react";
import TechnologyItem from "./technologyItem";

const Technologies = () => {
  return (
    <div className="technologies">
      <TechnologyItem
        name="HTML"
        path={`${process.env.PUBLIC_URL}/img/html.png`}
      />
      <TechnologyItem
        name="CSS"
        path={`${process.env.PUBLIC_URL}/img/css.png`}
      />
      <TechnologyItem
        name="JavaScript"
        path={`${process.env.PUBLIC_URL}/img/js.png`}
      />
      <TechnologyItem
        name="React.js"
        path={`${process.env.PUBLIC_URL}/img/react.png`}
      />
      <TechnologyItem
        name="Redux"
        path={`${process.env.PUBLIC_URL}/img/redux.png`}
      />
      <TechnologyItem
        name="npm"
        path={`${process.env.PUBLIC_URL}/img/npm.png`}
      />
      <TechnologyItem
        name="git"
        path={`${process.env.PUBLIC_URL}/img/git.png`}
      />
    </div>
  );
};

export default Technologies;
