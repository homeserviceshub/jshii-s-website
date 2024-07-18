import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import ThmBtn from "../thmButton";
import "./navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  const toggleDropdown = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1099) {
      setDropdown(!dropdown);
    }
  };

  const getNavLinkClass = (path) => {
    return currentPath === path ? "navLink active" : "navLink";
  };

  return (
    <div className="nav">
      <div className="navLeft">
        <div className="logo">
          <div className="logo-in">
            <Link to="/">
              <p style={{ color: "white" }}>Singh Painting</p>
            </Link>
          </div>
        </div>
        <ul className={`navLinks ${dropdown ? "active" : ""}`}>
          <li className={getNavLinkClass("/")}>
            <Link to="/" onClick={toggleDropdown}>
              Home
            </Link>
            <span className="activeLink"></span>
          </li>
          <li className={getNavLinkClass("/about-us")}>
            <Link to="/about-us" onClick={toggleDropdown}>
              About Us
            </Link>
            <span className="activeLink"></span>
          </li>
          <li className={getNavLinkClass("/services")}>
            <Link to="/services" onClick={toggleDropdown}>
              Services
            </Link>
            <span className="activeLink"></span>
          </li>
          <li className={getNavLinkClass("/gallery")}>
            <Link to="/gallery" onClick={toggleDropdown}>
              Gallery
            </Link>
            <span className="activeLink"></span>
          </li>
        </ul>
      </div>
      <div className="navRight">
        <div className="navBtn">
          <Link to="/contact-us">
            <ThmBtn text={"Book Appointment"} />
          </Link>
        </div>
        <div className="navNumberOuter">
          <div className="navIcon">
            <FiPhoneCall />{" "}
          </div>
          <div className="navNumber">
            <p className="smallHeading">Call Anytime</p>
            <h5> +(604) 123-4567 </h5>
          </div>
        </div>
      </div>
      <div className="menu-icon" onClick={toggleDropdown}>
        {dropdown ? <FiX /> : <FiMenu />}
      </div>
    </div>
  );
};

export default Navbar;
