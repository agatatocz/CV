import React from "react";

const Header = () => {
  return (
    <header className="row align-items-end justify-content-start">
      <img
        className="profilePhoto"
        alt="myPhoto"
        src={`${process.env.PUBLIC_URL}/img/myPhoto.png`}
      />
      <h1 className="myName">Agata Toczyńska</h1>
    </header>
  );
};

export default Header;
