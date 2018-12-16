import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import NavBar from "./navBar";
import Content from "./content";
import Footer from "./Footer";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <NavBar />
          <Content />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
