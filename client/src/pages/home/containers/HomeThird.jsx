import React from "react";
import strength from "../../../assets/services/strength.webp";
import cardio from "../../../assets/services/cardio.webp";
import yoga from "../../../assets/services/yoga.webp";
import weight from "../../../assets/services/weight.webp";
import martial from "../../../assets/services/martial-art.webp";
import athletic from "../../../assets/services/athlete.webp";

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
        "Develop muscular strength and endurance through structured weightlifting and resistance exercises. Our program focuses on progressive overload techniques, proper form, and personalized workout plans to help you build lean muscle, enhance bone density, and improve overall fitness.",
    },
    {
      img: cardio,
      title: "Cardio Workouts",
      description:
        "Boost your cardiovascular health with high-intensity interval training (HIIT), endurance runs, and heart-pumping exercises. This program is designed to increase stamina, burn fat efficiently, and improve lung capacity while keeping workouts fun and engaging.",
    },
    {
      img: yoga,
      title: "Yoga & Flexibility",
      description:
        "Enhance your flexibility, balance, and mental clarity through guided yoga sessions. Whether you're looking for stress relief, improved posture, or increased mobility, our yoga program incorporates mindfulness techniques, deep stretches, and breath control for a complete mind-body experience.",
    },
    {
      img: weight,
      title: "Weight Loss",
      description:
        "Achieve your fitness goals with our comprehensive weight loss training, combining strength training, cardio, and customized diet recommendations. Our program helps you shed unwanted fat, tone your body, and build sustainable habits for a healthy and active lifestyle.",
    },
    {
      img: martial,
      title: "Martial Arts",
      description:
        "Develop self-defense skills, agility, and discipline with our martial arts training. Whether it's kickboxing, taekwondo, or mixed martial arts (MMA), this program enhances coordination, reaction time, and mental focus while providing a full-body workout.",
    },
    {
      img: athletic,
      title: "Athletic Performance",
      description:
        "Train like a professional athlete with sport-specific conditioning, agility drills, and power-building exercises. This program is designed to enhance speed, strength, endurance, and reaction time, making it ideal for competitive athletes and fitness enthusiasts looking to push their limits.",
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
