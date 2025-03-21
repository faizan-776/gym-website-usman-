import React from "react";
import strength from "../../../assets/pexels-victorfreitas-791763 (1).webp";
import cardio from "../../../assets/pexels-olly-3763868.webp";
import yoga from "../../../assets/pexels-olly-868757.webp";
import weight from "../../../assets/young-fitness-woman-measure-with-tape-her-belly-isolated-white-wall.webp";
import martial from "../../../assets/karate-round-kick-punching-bag.webp";
import athletic from "../../../assets/front-view-fit-man-running-equipment.webp";

const Card = ({ img, title, description }) => {
  return (
    <div className="home__homethird-cards_card">
      <div className="home__homethird-cards_card-img">
        <img src={img} alt={title} />
      </div>
      <div className="home__homethird-cards_card-detail">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HomeThird = () => {
  const trainingPrograms = [
    {
      img: strength,
      title: "Strength Training",
      description:
        "Build muscle and improve endurance with guided strength training.",
    },
    {
      img: cardio,
      title: "Cardio Workouts",
      description:
        "Boost your heart health with high-intensity cardio exercises.",
    },
    {
      img: yoga,
      title: "Yoga & Flexibility",
      description:
        "Improve flexibility and mental clarity with structured yoga programs.",
    },
    {
      img: weight,
      title: "Weight Loss",
      description:
        "Burn calories effectively with personalized weight loss training.",
    },
    {
      img: martial,
      title: "Martial Arts",
      description:
        "Learn self-defense and enhance discipline with martial arts training.",
    },
    {
      img: athletic,
      title: "Athletic Performance",
      description:
        "Train like an athlete with high-performance sports conditioning.",
    },
  ];

  return (
    <div className="home__homethird">
      <div className="container">
        <div className="home__homethird-heading">
          <h2>Our Services</h2>
          <h1>Training Programs</h1>
        </div>
        <div className="home__homethird-cards">
          {trainingPrograms.map((program, index) => (
            <Card key={index} {...program} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeThird;
