import React from "react";

const ReasonCard = ({ img, title, description }) => {
  return (
    <div className="home__homesecond-content_reasons-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
const HomeSecond = () => {
  const reasons = [
    {
      img: "image1.jpg",
      title: "Expert Trainers",
      description: "Train with the best fitness professionals.",
    },
    {
      img: "image2.jpg",
      title: "Modern Equipment",
      description: "Top-notch machines for effective workouts.",
    },
    {
      img: "image3.jpg",
      title: "Flexible Timing",
      description: "Open 24/7 to fit your schedule.",
    },
    {
      img: "image4.jpg",
      title: "Affordable Plans",
      description: "Budget-friendly options for everyone.",
    },
  ];
  return (
    <div className="home__homesecond">
      <div className="home__homesecond-img">
        <img src="" alt="" />
      </div>
      <div className="home__homesecond-content">
        <div className="home__homesecond-content_heading">
          <h2>Our Best Features</h2>
          <h1>Why choose us?</h1>
        </div>
        <div className="home__homesecond-content_reasons">
          {reasons.map((reason, index) => (
            <ReasonCard key={index} {...reason} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeSecond;
