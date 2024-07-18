import React from "react";
import "./contactComponent.css";
import { Col, Container, Row } from "react-bootstrap";
import ThmBtn from "../thmButton";
import { Link } from "react-router-dom";

const ContactComponentInPage = () => {
  return (
    <div className="py-5 contactUsBg">
      <Container className=" rounded-3 py-4 ">
        <Row className="align-items-center">
          <Col md={7} className=" p-4">
            <h2 className="mb-3 text-white fw-bolder">Have a Project?</h2>
            <p>
              Have a commercial or residential painting project, interior or
              exterior, that needs attention? Contact us today. You'll be glad
              you did.
            </p>
          </Col>
          <Col md={5} className="text-center">
            <Link to="/contact-us">
              <ThmBtn text={"Contact Us"} className={"featureBtn btnColor"} />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactComponentInPage;
