import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import NavBar from "./components/navBar";
import Content from "./components/content";
import Footer from "./components/footer";

const App = () => {
  const [content, setContent] = useState("");

  return (
    <React.Fragment>
      <Header />
      <NavBar setContent={setContent} />
      <Content content={content} />
      <Footer />
    </React.Fragment>
  );
};

export default App;
