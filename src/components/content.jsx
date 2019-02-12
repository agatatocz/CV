import React from "react";
import About from "./about";
import Contact from "./contact";
import Technologies from "./technologies";

const Content = props => {
  let display;
  switch (props.content) {
    case "technologie":
      display = <Technologies />;
      break;

    case "kontakt":
      display = <Contact />;
      break;

    default:
      display = <About />;
      break;
  }

  return <article className="content">{display}</article>;
};

export default Content;
