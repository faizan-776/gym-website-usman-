import React from "react";
import "./home.css";
import HomeFirst from "./containers/HomeFirst";
import HomeSecond from "./containers/HomeSecond";
import HomeThird from "./containers/HomeThird";
import HomeFourth from "./containers/HomeFourth";
import HomeFifth from "./containers/HomeFifth";

const Home = () => {
  return (
    <div className="home">
      <HomeFirst />
      <HomeSecond />
      <HomeThird />
      <HomeFourth />
      <HomeFifth />
    </div>
  );
};

export default Home;
