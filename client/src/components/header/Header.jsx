import React from "react";
import "./header.css";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import logo from "../../assets/icons/logo.png";

const Header = () => {
  return (
    <div className="components__header">
      <div className="components__header-upper">
        <div className="components__header-upper_location">
          <CiLocationOn
            style={{ color: "var(--primary-color)", fontSize: "24px" }}
          />
          <p>430 E State St Lola, Wisconsin</p>
        </div>
        <div className="components__header-upper_phone">
          <LuPhone
            style={{ color: "var(--primary-color)", fontSize: "24px" }}
          />
          <p>+1 234 567 8900</p>
        </div>
        <div className="components__header-upper_email">
          <MdOutlineMail
            style={{ color: "var(--primary-color)", fontSize: "24px" }}
          />
          <p>abc@xyz.com</p>
        </div>
      </div>
      <hr color="#2d2e30" />
      <div className="components__header-lower">
        <div className="components__header-lower_logo">
          <img src={logo} alt="Logo" className="logo" />
          <h1>
            Titan <span>Gym</span>
          </h1>
        </div>
        <ul className="components__header-lower_nav">
          <li>Home</li>
          <li>Services</li>
          <li>Trainers</li>
          <li>Blog</li>
          <li>About</li>
        </ul>
        <div className="components__header-lower_contact">
          <button className="btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
