import React from "react";
import "./home.css";
import HomeFirst from "./containers/HomeFirst";
import HomeSecond from "./containers/HomeSecond";
import HomeThird from "./containers/HomeThird";

const Home = () => {
  return (
    <div className="home">
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
    </div>
  );
};

export default Home;
