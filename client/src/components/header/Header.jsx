import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { LuPhone } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import logo from "../../assets/icons/logo.png";
import "./header.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-upper">
        <div className="header-upper_item">
          <CiLocationOn size={20} />
          <p>430 E State St, Lola</p>
        </div>
        <span>|</span>
        <div className="header-upper_item">
          <LuPhone size={20} />
          <p>+1 234 567 8900</p>
        </div>
        <span>|</span>
        <div className="header-upper_item">
          <MdOutlineMail size={20} />
          <p>abc@xyz.com</p>
        </div>
      </div>

      <div className="header-lower">
        <div className="header-lower_logo">
          <img src={logo} alt="Logo" />
          <h1>
            Titan <span>Gym</span>
          </h1>
        </div>

        <nav className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            {["Home", "Services", "Trainers", "Blog", "About"].map((item) => (
              <li key={item} onClick={() => setIsOpen(false)}>
                {item}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <button className="btn">Contact Us</button>
          <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoMdClose size={30} /> : <FiMenu size={30} />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
