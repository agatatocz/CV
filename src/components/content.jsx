import React from "react";
import About from "./About";
import Contact from "./Contact";
import Technologies from "./Technologies";
import Projects from "./Projects";
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
