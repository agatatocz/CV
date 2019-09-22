import React, { Component } from "react";
import tabs from "../data/tabs";

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
            onClick={e => this.handleClick(e, tabs.about)}
          >
            O mnie
          </li>
          <li
            className="nav-item nav-link"
            onClick={e => this.handleClick(e, tabs.technologies)}
          >
            Technologie
          </li>
          <li
            className="nav-item nav-link"
            onClick={e => this.handleClick(e, tabs.projects)}
          >
            Projekty
          </li>
          <li
            className="nav-item nav-link"
            onClick={e => this.handleClick(e, tabs.contact)}
          >
            Kontakt
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
