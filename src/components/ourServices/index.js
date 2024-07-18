import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ourServices.css";
import ServiceCard from "../servicesComponent/serviceCard";

const OurServices = () => {
  const servicesList = [
    {
      title: "Interior Painting",
      description:
        "Our services bring warmth and personality to every room, with careful planning and execution.",
      link: "interior-painting",
    },
    {
      title: "Exterior Painting",
      description:
        "Our services involve thorough preparation and high-quality finishes to make your home stand out.",
      link: "exterior-painting",
    },
    {
      title: "Commercial Painting",
      description:
        "Transforming business spaces with professional painting services that reflect quality and precision.",
      link: "commercial-painting",
    },
  ];
  return (
    <div className="ourServices">
      <div className="servicesBgBox"></div>
      <div className="servicesPlainBox"></div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={6} sm={12} className="text-center servicesDiv">
            <div className="secondSubTitle">Our Services</div>
            <h2 className="secondTitle">
              Services We Offer
              <hr className="mx-auto" />
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {servicesList.map((item, index) => {
            return (
              <Col
                key={index}
                lg={4}
                md={4}
                sm={12}
                className="text-center mb-4"
              >
                <ServiceCard data={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container className="twoColumnContainer">
        <div className="component">
          <div className="imageContainer">
            <img src="/assets/images/whiteBg.png" alt="Description1" />
          </div>
          <div className="d-flex flex-column">
            <div className="secondSubTitle white ">Services We Offer</div>
            <h2 className="secondTitle white">
              Residential Painting
              <hr />
            </h2>
          </div>
        </div>
        <div className="component">
          <div className="imageContainer">
            <img src="/assets/images/whiteBg.png" alt="Description2" />
          </div>
          <div className="d-flex flex-column">
            <div className="secondSubTitle white ">Services We Offer</div>
            <h2 className="secondTitle white">
              Commericial Painting
              <hr />
            </h2>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OurServices;
