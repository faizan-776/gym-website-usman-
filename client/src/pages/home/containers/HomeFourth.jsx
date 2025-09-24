import React from "react";
import Trainercard from "../../../components/trainerCard/Trainercard";
import trainer1 from "../../../assets/trainers/gymtrainer1.webp";
import trainer2 from "../../../assets/trainers/gymtrainer2.webp";
import trainer3 from "../../../assets/trainers/gymtrainer3.webp";

const HomeFourth = () => {
  const trainers = [
    { name: "Usman", image: trainer1 },
    { name: "Random uncle", image: trainer2 },
    { name: "Sama", image: trainer3 },
  ];

  return (
    <div className="home__homefourth">
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
      </div>
    </div>
  );
};

export default HomeFourth;
