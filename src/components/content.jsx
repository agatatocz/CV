import React from "react";
import About from "./about";
import Contact from "./contact";
import Technologies from "./technologies";
import Projects from "./projects";
import tabs from "../data/tabs";

const getContent = content => {
  switch (content) {
    case tabs.technologies:
      return <Technologies />;

    case tabs.projects:
      return <Projects />;

    case tabs.contact:
      return <Contact />;

    default:
      return <About />;
  }
};

const Content = ({ content }) => {
  let display = getContent(content);
  return <article className="content">{display}</article>;
};

export default Content;
