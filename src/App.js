import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Content from "./components/Content";
import Footer from "./components/Footer";

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
