import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

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
      <Router>
        <nav className="navBar">
          <ul className="nav nav-tabs">
            <li
              className="nav-item nav-link active"
              onClick={e => this.handleClick(e, "o mnie")}
            >
              <Link to="/">O mnie</Link>
            </li>
            <li
              className="nav-item nav-link"
              onClick={e => this.handleClick(e, "technologie")}
            >
              <Link to="/technologie">Technologie</Link>
            </li>
            <li
              className="nav-item nav-link"
              onClick={e => this.handleClick(e, "kontakt")}
            >
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </Router>
    );
  }
}

export default NavBar;
