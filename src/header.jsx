import React from "react";

const Header = () => {
  return (
    <header className="row align-items-center">
      <div className="col-3">
        <img className="profilePhoto" alt="myPhoto" src="/img/myPhoto.jpg" />
      </div>
      <div className="col">
        <h1 className="myName">Agata Toczyńska</h1>
      </div>
    </header>
  );
};

export default Header;
