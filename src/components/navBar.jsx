import React, { Component } from "react";

class NavBar extends Component {
  handleClick = (e, content) => {
    let items = document.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++)
      items[i].className = items[i].className.replace("active", "");

    e.currentTarget.className += " active";
    this.props.setContent(content);
  };

  render() {
    return (
      <nav className="navBar">
        <ul className="nav nav-tabs">
          <li
            className="nav-item nav-link active"
            onClick={e => this.handleClick(e, "o mnie")}
          >
            O mnie
          </li>
          <li
            className="nav-item nav-link"
            onClick={e => this.handleClick(e, "technologie")}
          >
            Technologie
          </li>
          <li
            className="nav-item nav-link"
            onClick={e => this.handleClick(e, "projekty")}
          >
            Projekty
          </li>
          <li
            className="nav-item nav-link"
            onClick={e => this.handleClick(e, "kontakt")}
          >
            Kontakt
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
