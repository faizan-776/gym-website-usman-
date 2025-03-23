import React from "react";
import Carousel from "../../../components/carousel/Carousel";

import img1 from "../../../assets/carousel/img1.webp";
import img2 from "../../../assets/carousel/img2.webp";
import img3 from "../../../assets/carousel/img3.webp";
import img4 from "../../../assets/carousel/img4.webp";

const HomeFifth = () => {
  const images = [img1, img2, img3, img4];

  return (
    <div className="home__homefifth">
      <div className="homefifth-container">
        <div className="home__homefifth-heading">
          <h2>Photo Gallery</h2>
          <h1>Moments with Customers</h1>
        </div>
        <div className="home__homefifth-carousel">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default HomeFifth;
