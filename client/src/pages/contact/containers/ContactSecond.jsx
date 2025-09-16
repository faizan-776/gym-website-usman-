import React from "react";
import phone from "../../../assets/icons/phone.webp";
import email from "../../../assets/icons/email.webp";
import address from "../../../assets/icons/address.webp";

const Detail = ({ img, heading, para }) => {
  return (
    <div className="contact__contactsecond-right_detail">
      <div className="contact__contactsecond-right_detail-img">
        <img src={img} alt="img" />
      </div>
      <div className="contact__contactsecond-right_detail-img_content">
        <h3>{heading}</h3>
        <p>{para}</p>
      </div>
    </div>
  );
};

const contactDetails = [
  {
    img: phone,
    heading: "Phone:",
    para: "+123 456 789",
  },
  {
    img: email,
    heading: "Email:",
    para: "info@example.com",
  },
  {
    img: address,
    heading: "Address",
    para: "123 Street, City, Country",
  },
];

const ContactSecond = () => {
  return (
    <div className="contact__contactsecond">
      <div className="container">
        <div className="contact__contactsecond-left">
          <div className="contact__contactsecond-left_heading">
            <h2>Contact us</h2>
            <h1>Need any help? Feel free to contact us.</h1>
          </div>
          <form className="contact__contactsecond-left_form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="tel" placeholder="Your Phone Number" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit" className="btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="contact__contactsecond-right">
          {contactDetails.map((detail, index) => (
            <Detail
              key={index}
              img={detail.img}
              heading={detail.heading}
              para={detail.para}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSecond;
