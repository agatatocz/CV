import React from "react";
import renderHTML from "react-render-html";
import about from "../data/about.js";

const About = () => {
  return <div className="about">{renderHTML(about.textHTML)}</div>;
};

export default About;
