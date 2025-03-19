import React from "react";

const Card = ({ img, title, description }) => {
  return (
    <div className="home__homethird-cards_card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const HomeThird = () => {
  const trainingPrograms = [
    {
      img: "path-to-image-1",
      title: "Strength Training",
      description:
        "Build muscle and improve endurance with guided strength training.",
    },
    {
      img: "path-to-image-2",
      title: "Cardio Workouts",
      description:
        "Boost your heart health with high-intensity cardio exercises.",
    },
    {
      img: "path-to-image-3",
      title: "Yoga & Flexibility",
      description:
        "Improve flexibility and mental clarity with structured yoga programs.",
    },
    {
      img: "path-to-image-4",
      title: "Weight Loss",
      description:
        "Burn calories effectively with personalized weight loss training.",
    },
    {
      img: "path-to-image-5",
      title: "Martial Arts",
      description:
        "Learn self-defense and enhance discipline with martial arts training.",
    },
    {
      img: "path-to-image-6",
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
