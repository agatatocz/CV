import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Content from "./components/content";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  state = {
    content: ""
  };

  setContent = content => {
    this.setState({ content });
  };

  renderApp = () => {
    return (
      <React.Fragment>
        <Header />
        <NavBar setContent={this.setContent} />
        <Content content={this.state.content} />
        <Footer />
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
