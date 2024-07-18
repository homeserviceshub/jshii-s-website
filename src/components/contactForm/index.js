import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./contactForm.css";
import ThmBtn from "../thmButton";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;
    const mailtoLink = `mailto:hrmnsidhu2019@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )}`;
    window.location.href = mailtoLink;
  };

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
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} lg={6} xl={6}>
                <Form.Group controlId="formName" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} lg={6} xl={6}>
                <Form.Group controlId="formSubject" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={12} lg={12} xl={12}>
                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Control
                    className="textArea"
                    as="textarea"
                    rows={5}
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
