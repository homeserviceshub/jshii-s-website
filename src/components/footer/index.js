import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FiPhoneCall,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiTwitter,
  FiInstagram,
} from "react-icons/fi";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <Container>
          <Row>
            <Col md={3}>
              <div className="footer-logo">
                {/* <img src="/assets/images/logo.png" alt="Logo" /> */}
                Singh Painting
              </div>
              <div className="social-icons">
                <a href="#!" className="social-icon">
                  <FiFacebook />
                </a>
                <a href="#!" className="social-icon">
                  <FiTwitter />
                </a>
                <a href="#!" className="social-icon">
                  <FiInstagram />
                </a>
              </div>
            </Col>
            <Col md={2}>
              <h5 className="white mb-4">Explore</h5>
              <ul className="footer-links">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/about-us"}>About Us</Link>
                </li>
                <li>
                  <Link to={"/contact-us"}>Contact Us</Link>
                </li>
                <li>
                  <Link to={"/gallery"}>Gallery</Link>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="white mb-4">Services</h5>
              <ul className="footer-links">
                <li>
                  <Link to={"/services"}>Interior Painting</Link>
                </li>
                <li>
                  <Link to={"/services"}>Exterior Painting</Link>
                </li>
                <li>
                  <Link to={"/services"}>Commercial Painting</Link>
                </li>
                <li>
                  <Link to={"/services"}>Residential Painting</Link>
                </li>
              </ul>
            </Col>
            <Col md={4}>
              <h5 className="white mb-4">Contact</h5>
              <div className="contact-info">
                <p className="font15 mb-3">
                  <FiPhoneCall className="font20" /> +(604) 780-9216
                </p>
                <p className="font15 mb-3">
                  <FiMail className="font20" /> singhpainting@gmail.com
                </p>
                <p className="font15 mb-3">
                  <FiMapPin className="font20" /> Surrey, Canada
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      <div className="copyright py-3">
        <p className="text-center">
          © 2024 Singh Painting. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
