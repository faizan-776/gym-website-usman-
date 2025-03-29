import React from "react";
import "./about.css";
import AboutFirst from "./containers/AboutFirst";
import AboutSecond from "./containers/AboutSecond";

const About = () => {
  return (
    <div className="about">
      <AboutFirst />
      <AboutSecond />
    </div>
  );
};

export default About;
