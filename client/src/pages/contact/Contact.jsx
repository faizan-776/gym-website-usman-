import React from "react";
import "./contact.css";
import ContactFirst from "./containers/ContactFirst";
import ContactSecond from "./containers/ContactSecond";

const Contact = () => {
  return (
    <div className="blog">
      <ContactFirst />
      <ContactSecond />
    </div>
  );
};

export default Contact;
