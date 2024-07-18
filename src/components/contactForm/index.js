import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contactForm.css";
import ThmBtn from "../thmButton";

const ContactForm = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col className="text-center mb-4">
          <div className="secondSubTitle">CONTACT US</div>
          <h2 className="secondTitle">
            Feel Free To Write
            <hr className="mx-auto" />
          </h2>
        </Col>
      </Row>
      <Row className="formBorder">
        <Col xl={8} lg={7} className="contact-form-left">
          <Form>
            <Row>
              <Col md={6} lg={6} xl={6}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Control type="text" placeholder="Phone" />
                </Form.Group>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Control type="text" placeholder="Subject" />
                </Form.Group>
              </Col>
              <Col md={12} lg={12} xl={12}>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Control
                    className="textArea"
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                  />
                </Form.Group>
              </Col>
              <Col md={12} lg={12} xl={12}>
                <ThmBtn text={"Send Message"} className={"w-100"} />
              </Col>
            </Row>
          </Form>
        </Col>
        <Col xl={4} lg={5} className="contact-form-right">
          <div className="formbg"></div>
          <div className="contact-info">
            <div className="mb-4">
              <div className="secondSubTitle">Call Us</div>
              <h5 className="fw-bold white">+(604) 780-9216</h5>
            </div>
            <div className="mb-4">
              <div className="secondSubTitle">Email Us</div>
              <h5 className="fw-bold white">singhpainting@gmail.com</h5>
            </div>
            <div className="mb-4">
              <div className="secondSubTitle">Visit Us</div>
              <h5 className="fw-bold white">Surrey</h5>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
