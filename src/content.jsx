import React from "react";

const Content = props => {
  const about = (
    <div className="about">
      Jestem studentką trzeciego roku Informatyki na Politechnice Wrocławskiej.
      Od dwóch lat interesuję się zagadnieniem projektowania i tworzenia stron
      internetowych oraz uczę się programowania webowego. Niedawno miałam
      przyjemność wziąć udział w kursie Coders Camp prowadzonym przez
      wrocławskie stowarzyszenie
      <a
        rel="noopener noreferrer"
        href="https://coderscrew.pl/"
        target="_blank"
        className="inlineLink"
      >
        {" "}
        Coders Crew
      </a>
      , co pomogło mi utrwalić zdobyte do tej pory umiejętności i poznać
      technologie, z którymi jeszcze nie pracowałam. Największą przyjemność
      sprawia mi pisanie warstwy front-endowej aplikacji webowych i z tym też
      wiążę moją przyszłość zawodową.
    </div>
  );
  const technologies = (
    <div className="technologies">
      <div className="technologies-item">
        <h6>HTML</h6>
        <img alt="html" src="img/html.png" />
      </div>
      <div className="technologies-item">
        <h6>CSS</h6>
        <img alt="css" src="img/css.png" />
      </div>
      <div className="technologies-item">
        <h6>JavaScript</h6>
        <img alt="js" src="img/js.png" />
      </div>
      <div className="technologies-item">
        <h6>React.js</h6>
        <img alt="react.js" src="img/react.png" />
      </div>
      <div className="technologies-item">
        <h6>npm</h6>
        <img alt="npm" src="img/npm.png" />
      </div>
      <div className="technologies-item">
        <h6>git</h6>
        <img alt="git" src="img/git.png" />
      </div>
    </div>
  );
  const contact = (
    <div style={{ textAlign: "center" }}>
      <h4>Zapraszam do kontaktu</h4>
      <p>
        <br />
        telefon: 602 183 121
        <br />
        e-mail: agatatocz@gmail.com
      </p>
    </div>
  );
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

  return <article className="content">{display}</article>;
};

export default Content;
