import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Content from "./components/content";
import Footer from "./components/footer";

class App extends Component {
  state = {
    content: ""
  };

  setContent = content => {
    this.setState({ content });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <NavBar setContent={this.setContent} />
        <Content content={this.state.content} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
