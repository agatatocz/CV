import React from "react";

const Content = props => {
  console.log(props.content);
  const about = "o mnie....";
  const technologies = "technologie....";
  const contact = "kontakt....";
  let display;
  switch (props.content) {
    case "technologie":
      display = technologies;
      break;

    case "kontakt":
      display = contact;
      break;

    default:
      display = about;
      break;
  }

  return <article className="tab-content">{display}</article>;
};

export default Content;
