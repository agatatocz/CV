import React from "react";
import renderHTML from "react-render-html";
import contact from "../data/contact";

const Contact = () => {
  return (
    <div style={{ textAlign: "center" }}>{renderHTML(contact.textHTML)}</div>
  );
};

export default Contact;
