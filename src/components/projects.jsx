import React from "react";
import renderHTML from "react-render-html";
import projects from "../data/projects";

const Projects = () => {
  return (
    <div className="container">
      <h2>{projects.nokia.title}</h2>
      {renderHTML(projects.nokia.descriptionHTML)}
      <h2>{projects.intive.title}</h2>
      {renderHTML(projects.intive.descriptionHTML)}
    </div>
  );
};

export default Projects;
