import React, { Component } from "react";
import "./App.css";
import Header from "./header";
import NavBar from "./navBar";
import Content from "./content";
import Footer from "./footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    content: "o mnie"
  };

  setContent = content => {
    this.setState({ content });
  };

  renderApp = () => {
    return (
      <React.Fragment>
        <div className="myContainer">
          <Header />
          <NavBar setContent={this.setContent} />
          <Content content={this.state.content} />
          <Footer />
        </div>
      </React.Fragment>
    );
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/kontakt" render={() => this.renderApp()} />
          <Route path="/technologie" render={() => this.renderApp()} />
          <Route path="/" render={() => this.renderApp()} />
        </Switch>
      </Router>
    );
  }
}

export default App;
