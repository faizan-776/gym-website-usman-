import React from "react";
import PhotoGallery from "../../../components/carousel/Carousel";
import trainer1 from "../../../assets/trainers/gymtrainer1.webp";
import trainer2 from "../../../assets/trainers/gymtrainer2.webp";
import trainer3 from "../../../assets/trainers/gymtrainer3.webp";

import img1 from "../../../assets/carousel/brand-1.webp";
import img2 from "../../../assets/carousel/brand-2.webp";
import img3 from "../../../assets/carousel/brand-3.webp";
import img4 from "../../../assets/carousel/brand-4.webp";
import img5 from "../../../assets/carousel/brand-5.webp";

import Trainercard from "../../../components/trainerCard/Trainercard";

const AboutThird = () => {
  const trainers = [
    { name: "Steve", image: trainer1 },
    { name: "Bob", image: trainer2 },
    { name: "Carla", image: trainer3 },
  ];
  const images = [img1, img2, img3, img4, img5];
  return (
    <div className="about__aboutthird">
      <div className="container">
        <div className="home__homefourth-heading">
          <h2>Meet Our Team</h2>
          <h1>Meet Our Expert Trainers</h1>
        </div>
        <div className="home__homefourth-experts">
          {trainers.map((trainer, index) => (
            <Trainercard
              key={index}
              image={trainer.image}
              name={trainer.name}
            />
          ))}
        </div>

        <div className="home__homefourth-carousal">
          <PhotoGallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default AboutThird;
