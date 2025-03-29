import React from "react";
import "./about.css";
import AboutFirst from "./containers/AboutFirst";
import AboutSecond from "./containers/AboutSecond";
import AboutThird from "./containers/AboutThird";

const About = () => {
  return (
    <div className="about">
      <AboutFirst />
      <AboutSecond />
      <AboutThird />
    </div>
  );
};

export default About;
