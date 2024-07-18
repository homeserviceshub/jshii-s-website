import React from "react";
import "./featureSection.css";
import { Col, Container, Row } from "react-bootstrap";
import ThmBtn from "../thmButton";
import AwarBadge from "../svgs/awarBadge";
import { Link } from "react-router-dom";

const FeatureSection = () => {
  return (
    <div className="featureBackground">
      <Container className="py-5">
        <Row className="m-auto">
          <Col className="features">
            <div className="feature">
              <div className="featureImgDiv">
                <AwarBadge />
              </div>

              <div>Best Quality </div>
            </div>
            <div className="feature">
              <div className="featureImgDiv">
                <AwarBadge />
              </div>

              <div>Best Quality </div>
            </div>
            <div className="feature">
              <div className="featureImgDiv">
                <AwarBadge />
              </div>

              <div>Best Quality </div>
            </div>
            <div className="feature">
              <div className="featureImgDiv">
                <AwarBadge />
              </div>

              <div>Best Quality </div>
            </div>
            <div className="feature">
              <div className="featureImgDiv">
                <AwarBadge />
              </div>

              <div>Best Quality </div>
            </div>
          </Col>
        </Row>
        <Row className="m-auto">
          <Col className="allServices">
            Our services does not end here. Find out how we can help your Home &
            Office
            <Link to="/services">
              <ThmBtn text={"All Services"} className={"featureBtn"} />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeatureSection;
