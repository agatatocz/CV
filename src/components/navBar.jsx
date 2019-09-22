import React, { useState } from "react";
import Tab from "./tab";
import tabs from "../data/tabs";

const NavBar = ({ setContent }) => {
  const [active, setActive] = useState(tabs.about);

  const handleClick = tab => {
    setActive(tab);
    setContent(tab);
  };

  return (
    <nav className="navBar">
      <ul className="nav nav-tabs">
        {Object.values(tabs).map(tab => (
          <Tab
            tab={tab}
            active={active === tab}
            onClick={() => handleClick(tab)}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
