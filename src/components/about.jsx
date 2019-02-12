import React from "react";

const About = () => {
  return (
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
      technologie, z którymi wcześniej nie pracowałam. Największą przyjemność
      sprawia mi pisanie warstwy front-endowej aplikacji webowych i z tym też
      wiążę moją przyszłość zawodową.
    </div>
  );
};

export default About;
