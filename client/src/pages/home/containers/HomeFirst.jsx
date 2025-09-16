import React from "react";
import banner1 from "../../../assets/banners/lifting.webp";

const Homefirst = () => {
  return (
    <div
      className="home__homefirst"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="container">
        <div className="home__homefirst-content">
          <h2>Since - 1998</h2>
          <h1>Make Your Body Shape</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            readable content of a page when looking at its layout.
          </p>
          <button className="btn">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Homefirst;
