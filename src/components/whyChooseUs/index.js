import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./whyChooseUs.css";
import { SiTicktick } from "react-icons/si";
import ThmBtn from "../thmButton";
import { Link } from "react-router-dom";
// import { ReactComponent as TickIcon } from "./path/to/tickIcon.svg"; // Adjust the path accordingly

const WhyChooseUs = () => {
  return (
    <Container className="whyChooseUs p-4 my-5 rounded-3 bg-white">
      <Row className="align-items-center">
        <Col md={6} className="whyChooseUsImage p-0">
          <Image src="/assets/images/whiteBg.png" alt="Why Choose Us" fluid />
        </Col>
        <Col md={6} className="whyChooseUsContent p-4">
          <div className="secondSubTitle">WHY CHOOSE US</div>
          <h2 className="secondTitle">
            We Focus on Makeing Your Home Beautiful
            <hr />
          </h2>

          <div className="whyChooseUsPoints d-flex flex-column gap-4">
            <div className="whyChooseUsPoint d-flex align-items-start gap-3">
              <div className="tickIcon d-flex align-items-center justify-content-center">
                <SiTicktick />
              </div>
              <div>
                <h4>High Quality</h4>
                <p>
                  We provide the best quality services to ensure your home looks
                  beautiful.
                </p>
              </div>
            </div>
            <div className="whyChooseUsPoint d-flex align-items-start gap-3">
              <div className="tickIcon d-flex align-items-center justify-content-center">
                <SiTicktick />
              </div>
              <div>
                <h4>Professional Team</h4>
                <p>
                  Our team is highly skilled and professional in handling all
                  tasks.
                </p>
              </div>
            </div>
            <div className="mt-3">
              <Link to="/about-us">
                <ThmBtn text={"Discover Now"} />
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
