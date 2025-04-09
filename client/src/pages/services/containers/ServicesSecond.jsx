import React from "react";
import PhotoGallery from "../../../components/carousel/Carousel";
import strength from "../../../assets/services/strength.webp";
import cardio from "../../../assets/services/cardio.webp";
import yoga from "../../../assets/services/yoga.webp";
import weight from "../../../assets/services/weight.webp";
import martial from "../../../assets/services/martial-art.webp";
import athletic from "../../../assets/services/athlete.webp";

import img1 from "../../../assets/carousel/brand-1.webp";
import img2 from "../../../assets/carousel/brand-2.webp";
import img3 from "../../../assets/carousel/brand-3.webp";
import img4 from "../../../assets/carousel/brand-4.webp";
import img5 from "../../../assets/carousel/brand-5.webp";

const Card = ({ img, title, description }) => {
  return (
    <div className="services__servicessecond-cards_card">
      <div className="home__homethird-cards_card-img">
        <img src={img} alt={title} />
      </div>
      <div className="services__servicessecond-cards_card-detail">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const ServicesSecond = () => {
  const images = [img1, img2, img3, img4, img5];
  const trainingPrograms = [
    {
      img: strength,
      title: "Strength Training",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout.",
    },
    {
      img: cardio,
      title: "Cardio Workouts",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout.",
    },
    {
      img: yoga,
      title: "Yoga & Flexibility",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout.",
    },
    {
      img: weight,
      title: "Weight Loss",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout.",
    },
    {
      img: martial,
      title: "Martial Arts",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout..",
    },
    {
      img: athletic,
      title: "Athletic Performance",
      description:
        "It is long estabas and many lished fact will been distracted atempts by them content system and looking for its layout..",
    },
  ];
  return (
    <div className="services__servicessecond">
      <div className="container">
        <div className="services__servicessecond-heading">
          <h2>Our Services</h2>
          <h1>Training Programs</h1>
        </div>
        <div className="services__servicessecond-cards">
          {trainingPrograms.map((program, index) => (
            <Card key={index} {...program} />
          ))}
        </div>
        <div className="services__servicessecond-gallery">
          <PhotoGallery images={images} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSecond;
