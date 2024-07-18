import React from "react";
import "./servicesComponent.css";
import PageHeader from "../pageHeader";
import { Col, Container, Row } from "react-bootstrap";
import ServiceCard from "./serviceCard";
import ContactComponentInPage from "../contactComponent/contactComponentInPage";

const ServicesComponent = () => {
  const servicesList = [
    {
      title: "Drywall Repair",
      description:
        "Restoring walls is essential for maintaining your home's beauty, and we ensures flawless results.",
      link: "drywall-repair",
    },
    {
      title: "Residential Painting",
      description:
        "Painting homes is about creating impressions, and we ensure this with excellent craftsmanship.",
      link: "residential-painting",
    },
    {
      title: "Commercial Painting",
      description:
        "Transforming business spaces with professional painting services that reflect quality and precision.",
      link: "commercial-painting",
    },
    {
      title: "Exterior Painting",
      description:
        "Our services involve thorough preparation and high-quality finishes to make your home stand out.",
      link: "exterior-painting",
    },
    {
      title: "Interior Painting",
      description:
        "Our services bring warmth and personality to every room, with careful planning and execution.",
      link: "interior-painting",
    },
  ];

  return (
    <div>
      <PageHeader />
      <Container className="mt-5 ">
        <Row className=" py-5">
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
      <ContactComponentInPage />
    </div>
  );
};

export default ServicesComponent;
