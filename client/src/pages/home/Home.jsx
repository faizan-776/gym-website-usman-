import React from "react";
import "./home.css";
import HomeFirst from "./containers/HomeFirst";
import HomeSecond from "./containers/HomeSecond";
import HomeThird from "./containers/HomeThird";
import HomeFourth from "./containers/HomeFourth";

const Home = () => {
  return (
    <div className="home">
      {/* <HomeFirst />
      <HomeSecond /> */}
      <HomeThird />
      <HomeFourth />
    </div>
  );
};

export default Home;
