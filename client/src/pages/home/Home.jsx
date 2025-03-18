import React from "react";
import "./home.css";
import HomeFirst from "./containers/HomeFirst";
import HomeSecond from "./containers/HomeSecond";

const Home = () => {
  return (
    <div className="home">
      <HomeFirst />
      <HomeSecond />
    </div>
  );
};

export default Home;
