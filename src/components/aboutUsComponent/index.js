import React from "react";
import "./aboutUsComponent.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import { SiTicktick } from "react-icons/si";
import ContactComponentInPage from "../contactComponent/contactComponentInPage";

const AboutUsComponent = () => {
  return (
    <div>
      <Container className="whyChooseUs p-4 my-5 rounded-3 bg-white">
        <Row className="align-items-center">
          <Col md={7} className="whyChooseUsContent p-4">
            <div className="secondSubTitle">Get To Know Us</div>
            <h2 className="secondTitle">
              We Make Difference in Your Homes
              <hr />
            </h2>
            <h4 className="secondTitle font20">
              We have 7+ years of experiences for give you better quality
              results.
            </h4>

            <div className="mt-3 d-flex flex-column gap-4">
              <div className="d-flex gap-4 flex-wrap">
                <div className="points whyChooseUsPoint d-flex align-items-center gap-3">
                  <div className="tickIcon d-flex align-items-center justify-content-center">
                    <SiTicktick fill="#a47c68" />
                  </div>
                  <h5>High Quality</h5>
                </div>
                <div className="points whyChooseUsPoint d-flex align-items-center gap-3">
                  <div className="tickIcon d-flex align-items-center justify-content-center">
                    <SiTicktick fill="#a47c68" />
                  </div>
                  <h5>Professionalism</h5>
                </div>
              </div>
            </div>
            <div className="mt-3 d-flex flex-column gap-4">
              <div className="d-flex gap-4 flex-wrap">
                <div className="points whyChooseUsPoint d-flex align-items-center gap-3">
                  <div className="tickIcon d-flex align-items-center justify-content-center">
                    <SiTicktick fill="#a47c68" />{" "}
                  </div>
                  <h5>Safety Focussed</h5>
                </div>
                <div className="points whyChooseUsPoint d-flex align-items-center gap-3">
                  <div className="tickIcon d-flex align-items-center justify-content-center">
                    <SiTicktick fill="#a47c68" />{" "}
                  </div>
                  <h5>Quality Workmanship</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col md={5} className="whyChooseUsImage p-0">
            <Image src="/assets/images/whiteBg.png" alt="Why Choose Us" fluid />
          </Col>
        </Row>
      </Container>
      <ContactComponentInPage />
    </div>
  );
};

export default AboutUsComponent;
